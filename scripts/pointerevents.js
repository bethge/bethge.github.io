// Mouse and Pointer events
var events = [
  'down',
  'up',
  'over',
  'enter',
  'move',
  'out',
  'leave'
];

// properties
var properties = [
  'type',
  'button',
  'buttons'
];

// Header row
properties.forEach(function(p) {
  $($('tr')[0]).append('<td>' + p + '</td>');
});

// Empty rows
['mouse', 'pointer'].forEach(function(input) {
  events.forEach(function(type) {
    var id = input + type;
    var $row = $('<tr id="'+ id +'"><td>' + id + '</td></tr>');
    properties.forEach(function(property) {
      $row.append($('<td id="' + id + property + '"></td>'));
    });
    canvas.addEventListener(id, function(event) {
      properties.forEach(function(property) {
        $('#' + id + property).text(event[property]);
      });
    });
    $('table').append($row);
  });
});
