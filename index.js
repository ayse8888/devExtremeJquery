$(function () {
    $("#buttonContainer").dxButton({
        text: "Click me!",
        onClick: function () {
            alert("Hello world!");
        }
    });
});

$(function() {
    $("#tabs").dxTabs({
        width: 300,
        items: [
            {
                badge: 'First',
                disabled: true                
            },
            {
                text: 'Second',
            },
            {
                icon: 'favorites',
                text: 'Third'                
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

