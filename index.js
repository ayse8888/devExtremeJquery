$(function () {
    $("#buttonContainer").dxButton({
        text: "Click me!",
        onClick: function () {
            alert("Hello world!");
        }
    });
});


// $(function() {
//     var tabPanel = $('#tabPanel').dxTabs({
//         height: 30,
//         dataSource: [
//             { text: 'Tab 1', contentId: "tab1" },
//             { text: 'Tab 2', contentId: "tab2" },
//         ],
//         itemTitleTemplate: function(data) {
//             return data.text;
//         },
//         itemTemplate: function(data) {
//             return data.content;
//         }
//     }).dxTabs('instance');

//     var content = $('#allTabsContainer');

//     tabPanel.on('itemClick', function(e) {
//         var selectedItem = e.itemData;

//         Update the contents of the "content" element based on the selected tab
//         content.html(selectedItem.contentId);
//     });
// });

$(function () {
    $("#tabPanel").dxTabs({
        width: 300,
        items: [
            {
                badge: 'Sayfam',
                disabled: true,
            },
            {
                text: 'Çağrı Listele',
            },
            {
                // icon: 'favorites',
                text: 'Çağrı Düzenle',
            }
        ],
        onItemClick(e) {
            showMessage(e.itemIndex + 1);
        }
    });

    function showMessage(id) {
        DevExpress.ui.notify(
            {
                message: `Tab ${id} has been clicked!`,
                width: 250
            },
            'info',
            500
        );
    };
})


$(document).ready(function () {
    var previousActiveTabIndex = 0;

    $(".tab-switcher").on('click keypress', function (event) {
        // event.which === 13 means the "Enter" key is pressed

        if ((event.type === "keypress" && event.which === 13) || event.type === "click") {

            var tabClicked = $(this).data("tab-index");

            if (tabClicked != previousActiveTabIndex) {
                $("#allTabsContainer .tab-container").each(function () {
                    if ($(this).data("tab-index") == tabClicked) {
                        $(".tab-container").hide();
                        $(this).show();
                        previousActiveTabIndex = $(this).data("tab-index");
                        return;
                    }
                });
            }
        }
    });
});

$(function () {
    $("#callRadioGroupContainer").dxRadioGroup({
        dataSource: ["Gelen", "Giden"],
        value: "Gelen",
        layout: 'horizontal',
    });
});

$(function () {
    $("#registeredRadioGroupContainer").dxRadioGroup({
        dataSource: ["Kayıtlı Bağlantı", "Bağlantı Değil"],
        value: "Kayıtlı Bağlantı",
        layout: 'horizontal',
    });
});

$(function () {
    $("#form").dxForm({
        formData: {
            name: "John Heart",
            position: "CEO",
            hireDate: new Date(2012, 4, 13),
            officeNumber: 901,
            notes: "John has been in the Audio/Video industry since 1990."
        },
        colCount: 2,
        items: ["name", "position", "hireDate", "officeNumber", {
            dataField: "notes",
            colSpan: 2
        }]
    });
});

$(function () {
    $("#dataGrid").dxDataGrid({
        dataSource: [{
            "Name": "Nancy Davolio",
            "Company": "Sales Representative",
            "Date": "Sales Representative",
            "Employee": "Sales Representative",
            "#": "Sales Representative",
        }, {
            "Name": "Nancy Davolio",
            "Company": "Sales Representative",
            "Date": "Sales Representative",
            "Employee": "Sales Representative",
            "#": "Sales Representative",
        }, {
            "Name": "Nancy Davolio",
            "Company": "Sales Representative",
            "Date": "Sales Representative",
            "Employee": "Sales Representative",
            "#": "Sales Representative",
        },          
        ],
    });
});

// var update_pizza = function () {
//     if ($("#registeredRadioGroupContainer").is(":checked")) {
//         $('#name').prop('disabled', false);
//     }
//     else {
//         $('#name').prop('disabled', 'disabled');
//     }
//   };
//   $(update_pizza);