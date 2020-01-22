
if (!navigator.hardwareConcurrency) {
  throw "cannot test hardwareConcurrency in this browser";
}

Module['pthreadPoolSize'] = navigator.hardwareConcurrency;

