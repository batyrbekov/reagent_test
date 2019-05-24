(ns giggin.core
  (:require [reagent.core :as r]
            [giggin.components.header :refer [header]]
            [giggin.components.gigs :refer [gigs]]))

(defn app
  []
  [:div.container
   [header]
   [gigs]])

(defn ^:export main
  []
  (r/render
   [app]
   (.getElementById js/document "app")))


