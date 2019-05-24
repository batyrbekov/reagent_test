(ns giggin.state
  (:require [reagent.core :as r]))


(def apts (r/atom {:1 {:id :1, :desc "appointment1",  :status "inprocess" 
                       :start-date "2019-03-12T11:11" :end-date "2019-03-13T11:11" :timezone "GMT+3"}
                   
                   :2 {:id :2, :desc "appointment2",  :status "completed"
                       :start-date "2018-02-12T11:11" :end-date "2018-02-13T11:11" :timezone "GMT+3"}}))

