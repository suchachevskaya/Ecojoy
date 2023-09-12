$(document).ready(function () {
  $(".text-6").hover(
    function () {
      $(this).css("text-decoration", "underline");
    },
    function () {
      $(this).css("text-decoration", "none");
    }
  );
  

    function animateText() {
        $(".preview-main span").animate({
            marginLeft: "-=1px"
        }, 10, function() {
            var $this = $(this);
            if (parseFloat($this.css("marginLeft")) <= -$this.outerWidth()) {
                $this.css("marginLeft", $this.parent().outerWidth());
            }
            animateText();
        });
    }
    animateText();

  $(".img-shop").hover(
    function() {
        $(this).parent().css("overflow", "hidden");
        $(this).find("img").animate({ width: "120%" });
    },
    function() {
        $(this).find("img").animate({ width: "100%" });
    }
);
  
});
