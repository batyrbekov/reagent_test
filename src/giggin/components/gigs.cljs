(ns giggin.components.gigs
  (:require [giggin.state :as state]
            [giggin.helpers :refer [format-price]]
            [giggin.components.gig-editor :refer [gig-editor]]
            [reagent.core :as r]
            [clojure.string :as str]
            ;["@material-ui/icons" :as icons]
            ["@material-ui/core" :as mui]
            [cljs-time.core :as time]))

(def button (r/adapt-react-class mui/Button))
(def fab (r/adapt-react-class mui/Fab))
(def icon (r/adapt-react-class mui/Icon))
;(def deleteIcon (r/adapt-react-class icons/Delete))




(defn gigs
  []
  (let [modal (r/atom {:active false})
        initial-values {:id nil :desc "" :start-date "" :end-date "" :status "scheduled" :timezone "GMT+0"}
        values (r/atom initial-values)
        toggle-modal (fn
                       [{:keys [active gig]}]
                       (.log js/console (:status gig) ", " (:start-date gig) ",time: " (time/local-date-time 1986 10 14 4 3 27 456))
                       (swap! modal assoc :active active)
                       (reset! values gig))
        upsert-gig (fn [{:keys [id desc start-date end-date status timezone]}]
                     
                     (let [newid (or id (str "apts-" (random-uuid)))]
                       (.log js/console "upsert id: " id ", newid:" newid)
                       (swap! state/apts assoc newid {:id newid
                                                      :desc (str/trim desc)
                                                      :start-date start-date
                                                      :end-date end-date
                                                      :status status
                                                      :timezone timezone}))
                     (toggle-modal {:active false :gig initial-values}))]
    (fn
      
      
       []
	[:main
       [:div
        
        
        [button {:variant "contained" :color "primary"
                 :on-click #(toggle-modal {:active true :gig initial-values})} 
         "Add Appointment"
         ]
        
        [gig-editor {:modal modal
                     :values values
                     :upsert-gig upsert-gig
                     :toggle-modal toggle-modal
                     :initial-values initial-values}]
        
        [:table.tbl {:border 2}
         [:thead
          [:tr 
           [:td "id"]
           [:td "desc"]
           [:td "start date"]
           [:td "end date"]
           [:td "status"]
           [:td "timezone"]
           [:td ""]
           ]]
         
         [:tbody
          (for [{:keys [id desc start-date end-date status timezone] :as gig} (vals @state/apts)]
            [:tr {:key id}
             [:td  id]
             [:td {:on-click #(toggle-modal {:active true
                                             :gig gig})} desc ]
             [:td  start-date]
             [:td  end-date]
             [:td status]
             [:td timezone]
             [:td 
              [button {:color "secondary" :variant "contained" 
                       :on-click #(do
                                    (.log js/console "delete id:" id)
                                    (swap! state/apts dissoc id))
                       }"Delete"]]])]]
        
        
        ]])))


