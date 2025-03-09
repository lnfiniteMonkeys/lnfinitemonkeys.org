(ns weare.lnfinitemonkeys.core)

(defn create-confetti []
  (let [confetti-instance (.create js/confetti nil #js {:resize true
                                                        :useWorker true})]
    (-> (confetti-instance #js {:particleCount 100
                               :spread 70
                               :origin #js {:y 0.6}
                               :disableForReducedMotion true})
        (.then (fn []
                (js/setTimeout
                 (fn []
                   (-> (js/document.querySelector ".monkey-image")
                       (.-classList)
                       (.add "fade-in")))
                 1500))))))

(defn init []
  (js/console.log "Initializing ClojureScript app")
  (create-confetti))

(defn ^:export main []
  (init))

;; Run init when page loads
(js/window.addEventListener "DOMContentLoaded" init)