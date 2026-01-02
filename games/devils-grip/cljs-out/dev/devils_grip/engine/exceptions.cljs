(ns devils-grip.engine.exceptions)

(defprotocol ExceptionLogger
  (log-exception [e] "Handle logging an exception to js/console"))

(extend-protocol ExceptionLogger
  ExceptionInfo
  (log-exception [e]
    (println "Exception message:" (ex-message e))
    (println "Exception data:" (ex-data e))
    (when (ex-cause e)
      (println "Caused by:")
      (log-exception (ex-cause e))))

  object
  (log-exception [e]
    (.log js/console e)))
