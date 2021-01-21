package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type menu struct {
	ID   uint   `gorm:"primary_key" json:"id"`
	Name string `json:"Name"`
}

type menuHandler struct {
	DB *gorm.DB
}

func (h *menuHandler) Initialize() {
	dsn := "root:P@SSwordformysql@tcp(127.0.0.1:3306)/menu?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	db.AutoMigrate(&menu{})

	db.Create(&menu{Name: "KFC"})
	db.Create(&menu{Name: "Pizza"})
	db.Create(&menu{Name: "Hamburger"})
	db.Create(&menu{Name: "ผัดไท"})
	db.Create(&menu{Name: "ข้าวผัด"})
	db.Create(&menu{Name: "หนังไก่ทอด"})
	db.Create(&menu{Name: "ผัดเผ็ด"})
	db.Create(&menu{Name: "ปลาดุก"})
	db.Create(&menu{Name: "ปลาดุกอุย"})

	h.DB = db
}

func setupRouter() *gin.Engine {
	r := gin.Default()
	h := menuHandler{}
	h.Initialize()

	r.GET("/api", h.GetAllMenu)

	return r
}

func (h *menuHandler) GetAllMenu(c *gin.Context) {
	menus := []menu{}

	h.DB.Find(&menus)

	c.JSON(http.StatusOK, menus)
}

func main() {
	r := setupRouter()
	r.Run()
}
