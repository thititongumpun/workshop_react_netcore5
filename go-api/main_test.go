package main

import (
	"net/http"
	"net/http/httptest"
	"testing"
)

func testHTTPGetFood(t *testing.T) {
	t.Run("it should return 200", func(t *testing.T) {
		req, err := http.NewRequest(http.MethodGet, "/api", nil)
		if err != nil {
			t.Error(err)
		}

		resp := httptest.NewRecorder()
		handler := http.HandlerFunc(returnAllFood)
		handler.ServeHTTP(resp, req)

		if status := resp.Code; status != http.StatusOK {
			t.Errorf("wrong code: got %v want %v", status, http.StatusOK)
		}
	})
}

func TestHealthCheckHandler(t *testing.T) {
	req, err := http.NewRequest("Get", "/health-check", nil)
	if err != nil {
		t.Fatal(err)
	}

	resp := httptest.NewRecorder()
	handler := http.HandlerFunc(homePage)
	handler.ServeHTTP(resp, req)

	if status := resp.Code; status != http.StatusOK {
		t.Errorf("handler return wrong status code :got %v want %v",
			status, http.StatusOK)
	}

	expected := "GO API"
	if resp.Body.String() != expected {
		t.Errorf("handler returned unexpected: got %v want %v",
			resp.Body.String(), expected)
	}
}
