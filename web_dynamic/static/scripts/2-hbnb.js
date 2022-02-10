$(document).ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data, statusText, xhr) {
    if(xhr.status === 200) {
      $('#api_status').addClass('available');
    }
    else {
      $('#api_status').removeClass('available');
    }
  })
  const checkedAmenities = {};
  $(document).on('change', "input[type='checkbox']", function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }
    const lst = Object.values(checkedAmenities);
    if (lst.length === 0) {
      $('.amenities > h4').html('&nbsp;');
    } else {
      $('div.amenities > h4').text(Object.values(checkedAmenities).join(', '));
    }
  });
});
