$("#contact-form").submit(function(e) {
  e.preventDefault();

  var $form = $(this);
  $.post($form.attr("action"), $form.serialize()).then(function() {
    alert("Obrigado pela mensagem! Em breve entraremos em contato");
  });

  $("#contact-form")[0].reset();
});
