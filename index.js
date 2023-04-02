// Tab Panel DevExpress
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

// This function switched the content when you click side menu options
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

// radio button
$(function () {
    $("#callRadioGroupContainer").dxRadioGroup({
        dataSource: ["Gelen", "Giden"],
        value: "Gelen",
        layout: 'horizontal',
    });
});

// radio button
$(function () {
    $("#registeredRadioGroupContainer").dxRadioGroup({
        dataSource: ["Kayıtlı Bağlantı", "Bağlantı Değil"],
        value: "Kayıtlı Bağlantı",
        layout: 'horizontal',
    });
});

// form component devexpress
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

// data grid component devexpress
$(function () {
    $("#dataGrid").dxDataGrid({
        dataSource: [{
            "Name": "Nancy Davolio",
            "Company": "Makrovit",
            "Date": "January 12 12.15",
            "Employee": "Selim Yılmaz",
            "#": "",
        }, {
            "Name": "Nancy Davolio",
            "Company": "Makrovit",
            "Date": "January 12 12.15",
            "Employee": "Selim Yılmaz",
            "#": "",
        }, {
            "Name": "Nancy Davolio",
            "Company": "Makrovit",
            "Date": "January 12 12.15",
            "Employee": "Selim Yılmaz",
            "#": "",
        },
        ],
    });
});

// radio button change handler function
const valueChangedHandler = function (e) {
    const previousValue = e.previousValue;
    const newValue = e.value;

    // disable forms handler
    if (newValue === "Kayıtlı Bağlantı") {
        $(".right-form").css("background-color", "gray");
        $(".left-form").css("background-color", "white");
        $('.left-form-input').attr('disabled', 'disabled');
        $('.right-form-select').removeAttr('disabled');
    } else {
        $(".left-form").css("background-color", "gray");
        $(".right-form").css("background-color", "white");
        $('.right-form-select').attr('disabled', 'disabled');
        $('.left-form-input').removeAttr('disabled');
    }
};

// radio button change event handler
$(function () {
    $("#registeredRadioGroupContainer").dxRadioGroup("instance")
        .on("valueChanged", valueChangedHandler)
    console.log("valueChanged", valueChangedHandler)
})