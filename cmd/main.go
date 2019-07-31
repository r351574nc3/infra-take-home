package main

import (
	"github.com/gin-gonic/gin"
)

func createRouter() *gin.Engine {
	r := gin.Default()

	// Get total hours for cases value
	r.POST("/", func(c *gin.Context) {
		c.String(404, "No events matching your criteria")
	})
	return r
}

func main() {
	r := createRouter()

	r.Run(":8080")
}
