$(document).ready(function () {
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
