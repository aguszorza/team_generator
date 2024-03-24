package main

import (
	"errors"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"go/routes"
	"log"
	"net/http"
	"os"
	"time"
)

func logging(f http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		f(w, r)
		log.Printf("%s %s - %s", r.Method, r.URL.Path, time.Since(start))
	}
}

func main() {
	fmt.Printf("sarting server\n")
	router := mux.NewRouter()
	router.HandleFunc("/match", logging(routes.GenerateMatch)).Methods("POST")
	handler := cors.Default().Handler(router)

	err := http.ListenAndServe(":5000", handler)
	if errors.Is(err, http.ErrServerClosed) {
		fmt.Printf("server closed\n")
	} else if err != nil {
		fmt.Printf("error starting server: %s\n", err)
		os.Exit(1)
	}
}
