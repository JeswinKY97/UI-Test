             $(document).ready(function () {
                        var data = [
                            { id: 1, Name: "Jordan Jacob", Country: "USA", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 2, Name: "Cyril Thomas", Country: "Singapore", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 3, Name: "Abraham J", Country: "Indonesia", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 4, Name: "Anthony Tims", Country: "Singapore", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 5, Name: "Xavier Nathan", Country: "Canada", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 6, Name: "Juel Mary", Country: "Singapore", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 7, Name: "John Joseph", Country: "Canada", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 8, Name: "Asmi Shel", Country: "USA", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 9, Name: "Jeswin Reno", Country: "USA", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 10, Name: "Jordan Jacob", Country: "USA", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                            { id: 11, Name: "Jordan Jacob", Country: "USA", Relationship: "Brother", Accno: "1234123412341234", Payout: "Cash pickup" },
                        ];

                        
                        var lastSelected = null;
                        var table = $('#radioTable').DataTable({
                            paging: true,
                            searching: true,
                            ordering: false,
                            info: false,
                            lengthChange: false, // Hide the dropdown for changing the number of entries per page
                            data: data,
                            pageLength: 9, // Set the default page length to 10 entries per page
                            columns: [
                                {
                                    data: 'id', 
                                    width: '20px', render: function (data, type, row) {
                                        return '<input type="radio" name="radioGroup" class="radio-btn value="' + data + '">';
                                    },
                                    
                                },
                                { data: null, width: '30%', render: function (data, type, row) {
                                    var name = data.Name; 
                                    var country = data.Country;
                                        return '<div class="d-flex flex-row align-items-center name-section">' +
                                                    '<div class="avatar">' + name.charAt(0) + '</div>' + 
                                                    '<div class="d-flex flex-column justify-content-between name-country">' + 
                                                         '<div class="name">' + name + '</div>' + 
                                                         '<div class="country">' + country + '</div>' +
                                                     '</div></div>';
                                    }
                                },
                                { data: 'Relationship', width: '20%', },
                                { data: 'Accno', width: '30%', },
                                { data: 'Payout', width: '20%', },
                                {
                                     width: '20%',
                                    render: function(data, type, row) {
                                        var list = '<div class="dropdown">' +
                                        '<button class="btn btn-secondary menu-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/list_icon.svg" alt="dropdown"></button>' +
                                        '<ul class="dropdown-menu">' +
                                            '<li><a class="dropdown-item" href="#"><img src="assets/eye_icon.svg" alt="view"><span>View details</span></a></li>' +
                                            '<li><a class="dropdown-item" href="#"><img src="assets/pen_icon.svg" alt="edit"><span>Edit</span></a></li>' +
                                            '<li><a class="dropdown-item" href="#"><img src="assets/circle-plus.svg" alt="add"><span>Add to quick transfer</span></a></li>' +
                                        '</ul>' +
                                        '</div>';
                                        var threedots = '<button class="btn btn-secondary menu-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"><img src="assets/threedots.svg" alt="dropdown"></button>';
                                        return list + ' ' + threedots;
                                    }
                                }
                            ]
                  
                        });
                        
                        $('#searchInput').on('keyup', function() {
                            table.search(this.value).draw();
                        });
                        
                        
                        var currentPage = 1;
                        var totalPages = Math.ceil(data.length / 10);

                        function updatePageInfo() {
                            $('#page-info').text('Page ' + currentPage + ' of ' + totalPages);
                        }

                        updatePageInfo();

                        $('#prev-page').on('click', function() {
                            if (currentPage > 1) {
                                currentPage--;
                                table.page(currentPage - 1).draw(false);
                                updatePageInfo();
                            }
                        });

                        $('#next-page').on('click', function() {
                            if (currentPage < totalPages) {
                                currentPage++;
                                table.page(currentPage - 1).draw(false);
                                updatePageInfo();
                            }
                        });

                       
    
    
                        var lastSelected = null;
                            $('#radioTable tbody').on('change', 'input[type="radio"]', function() {
                                var selectedValue = $(this).val();
                                if (this !== lastSelected) {
                                    if (lastSelected !== null) {
                                        lastSelected.checked = false;
                                        $(lastSelected).closest('tr').removeClass('row-selected'); 
                                    }
                                    lastSelected = this;
                                    $(lastSelected).closest('tr').addClass('row-selected');
                                } else {
                                    lastSelected = null;
                                    $(this).closest('tr').removeClass('row-selected');
                                }
                                // You can perform any action you want with the selected value here
                            });

                    });