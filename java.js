$(document).ready(function () {
  var name = $("#name");
  var gender = $("#gender");
  var address = $("#address");
  var no = 0;
  $("#btn").click(function () {
    row = `
          <tr>
              <td>${(no += 1)}</td>
              <td>${name.val()}</td>
              <td>${gender.val()}</td>
              <td>${address.val()}</td>
              <td>
                  <button style="background-color: green">Edit</button>
                  <button style="background-color: red">Delete</button>
              </td>
          </tr>
          `;
    $("#tableData").append(row);
  });
});
