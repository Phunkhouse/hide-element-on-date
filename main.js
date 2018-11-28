(function() {

   // GET ACTUAL DATE
   let date = new Date()
   let actualDay = date.getDate()
   let actualMonth = date.getMonth() + 1
   let actualYear = date.getFullYear()

   // GET ALL ELEMENTS
   let elements = document.querySelectorAll(".element")

   // CHECK EACH ONE
   elements.forEach(function(element, index) {

      // GET DATA-DATE ATTRIBUTE
      let elementDate = element.dataset.date

      // CUT STRINGS
      let elementDay = elementDate.substring(0, 2)
      let elementMonth = elementDate.substring(3, 5)
      let elementYear = elementDate.substring(6, 10)

      // IF THEY ARE DUE, HIDE THEM
      // CHECK YEAR
      if (elementYear > actualYear) {
         return
      } else if (elementYear < actualYear) {
         element.style.display = "none"
         return
      } else {

         // CHECK MONTH
         if (elementMonth > actualMonth) {
            return
         } else if (elementMonth < actualMonth) {
            element.style.display = "none"
            return
         } else {

            // CHECK DAY
            if (elementDay >= actualDay) {
               return
            } else {
               element.style.display = "none"
            }
         }
      }

   })

})();