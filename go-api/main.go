package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

type foodData struct {
	Name string `json:"Name"`
}

type foodDatas []foodData

func returnAllFood(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint: getFoodAll")
	f := foodDatas{
		foodData{Name: "หนังไก่ทอด"},
		foodData{Name: "ข้าวผัด"},
		foodData{Name: "ผัดไท"},
		foodData{Name: "KFC"},
		foodData{Name: "Pizza"},
		foodData{Name: "Hamburger"},
	}
	json.NewEncoder(w).Encode(f)
	w.WriteHeader(http.StatusBadRequest)
	w.Header().Set("Content-Type", "application/json")
}

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "GO API")
}

func main() {
	http.HandleFunc("/", homePage)
	http.HandleFunc("/api", returnAllFood)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
