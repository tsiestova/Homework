

const getHours = function () {
   let hour = new Date().getHours();
   let message;

   if (hour >= 23 || hour < 5) {
      message = 'Good night,';
   }
   if (hour >= 5 && hour < 11) {
      message = 'Good morning,';
   }
   if (hour >= 11 && hour < 17) {
      message = 'Good day,';
   }
   if (hour >= 17 && hour < 23) {
      message = 'Good evening,';
   }

      return message;
}


const greeting = function (userName) {

   return((`${getHours()} ${userName}!`));

}


module.exports = {
   greeting
};

