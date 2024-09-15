import { inject, Injectable, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  Firestore,
  getDoc,
  updateDoc,
  where,
  query
} from '@angular/fire/firestore';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthStateService } from '../../shared/data-access/auth-state.service';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export type NewTask = Omit<Task, 'id'>;

const PATH = 'tasks';
@Injectable()
export class TaskService {
  private _firestore = inject(Firestore);
  private _collection = collection(this._firestore, PATH);
  private _authState = inject(AuthStateService);
  private _query = query(
    this._collection,
    where('userId', '==', this._authState.currentUser?.uid)
  );

  constructor() {
    this._authState.currentUser;
  }

  loading = signal<boolean>(true);
  getTasks = toSignal(
    (collectionData(this._query, { idField: 'id' }) as Observable<Task[]>).pipe(
      tap(() => this.loading.set(false)),
      catchError((e) => {
        this.loading.set(false);
        return throwError(() => e);
      })
    ),
    {
      initialValue: [],
    }
  );

  getTaskById(id: string) {
    const docRef = doc(this._collection, id);
    return getDoc(docRef);
  }

  create(task: NewTask) {
    return addDoc(this._collection, {
      ...task,
      userId: this._authState.currentUser?.uid,
    });
  }
  update(task: NewTask, id: string) {
    const docRef = doc(this._collection, id);
    return updateDoc(docRef, task);
  }

  delete(id: string) {
    const docRef = doc(this._collection, id);
    return deleteDoc(docRef);
  }
}
