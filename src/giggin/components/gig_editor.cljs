(ns giggin.components.gig-editor
  (:require ["@material-ui/core" :as mui]
            [reagent.core :as r]))

(def text-field (r/adapt-react-class mui/TextField))


(defn form-group
  [{:keys [id type value values]}]
  [:div.form__group
   [:label.form__label {:for id} id]
   [text-field {:type type
                        :id id
                        :value value
                        :on-change #(swap! values assoc (keyword id) (.. % -target -value))}]])

(defn gig-editor
  [{:keys [modal values upsert-gig toggle-modal initial-values]}]
  (let [{:keys [desc start-date end-date status timezone]} @values]
    [:div.modal (when (:active @modal) {:class "active"})
     [:div.modal__overlay]
     [:div.modal__container
      [:div.modal__body

       [form-group {:id "desc"
                    :type "text"
                    :value desc
                    :values values}]

       [form-group {:id "start-date"
                    :type "datetime-local"
                    :value start-date
                    :values values}]


       [form-group {:id "end-date"
                    :type "datetime-local"
                    :value end-date
                    :values values}]

       [:div.form__group
        [:label.form__label {:for "status"} "Статус"]
        [:select.form-control {:value status :on-change #(swap! values assoc :status (.. % -target -value))}
         [:option {:value "scheduled"} "запланирована"]
         [:option {:value "inprocess"} "в процессе"]
         [:option {:value "completed"} "завершена"]]]
      
      
      [:div.form__group
       [:label.form__label {:for "timezone"} "Часовой пояс"]
       [:select.form-control {:value timezone :on-change #(swap! values assoc :timezone (.. % -target -value))}
        [:option {:value "GMT+0"} "Гринвич"]
        [:option {:value "GMT+3"} "Москва"]
        [:option {:value "GMT+10"} "Хабаровск"]]]]
     
     [:div.modal__footer
      [:button.btn.btn--link.float--left
       {:on-click #(toggle-modal {:active false :gig initial-values})}
       "Cancel"]
      [:button.btn.btn--secondary
       {:on-click #(upsert-gig @values)}
       "Save"]]]]))
