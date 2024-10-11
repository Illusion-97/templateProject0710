import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

export const cursorInterceptor: HttpInterceptorFn = (req, next) => {
  document.body.classList.add("cursor-wait")
  return next(req).pipe(finalize(() => document.body.classList.remove("cursor-wait")));
};
