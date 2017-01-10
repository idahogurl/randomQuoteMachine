var QuoteGenerator = function() {
  var quote;
  var author;
  var tweetHrefBase = "https://www.twitter.com/intent/tweet?text=";
  var self = this;

  this.getQuote = function() {
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. You can get this in the API page of the API you intend to consume
      type: 'POST', // The HTTP Method, can be GET POST PUT DELETE etc
      data: {}, // Additional parameters here
      dataType: 'json',
      success: function(data) {
        self.quote = data["quote"];
        self.author = data["author"];
        
        self.setQuote();
        self.setAuthor();
        self.setTweetHref();
      },
      error: function(err) {
        alert(err);
      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "A3Zm9RGCYTmshYixIRFu2HNQ7vUVp1LgcpyjsnhiPPmEWCd60i"); // Enter here your Mashape key
      }
    });

  };
  this.setQuote = function() {
    debugger;
    $("#quote").html(self.quote);
  };

  this.setAuthor = function() {
    $("#author").html(self.author);
  };

 this.setTweetHref = function() {
    $("#tweet-link").attr("href", tweetHrefBase + escape('"' + self.quote + '" -' + self.author));
 };
};

function getQuote() {
  var quoteGenerator = new QuoteGenerator();
      quoteGenerator.getQuote();
}

$(document).ready(function() {
  
  $("#new-quote").click(function() {
    getQuote();
  }   );
  
  getQuote();
});


    

//