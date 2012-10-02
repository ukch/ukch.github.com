$(function() {
    // Make external links open in new window
    $(document.links).filter(function() {
        return this.hostname !== window.location.hostname;
    }).attr('target', '_blank');

    // Set up modal QTips
    $(".qtmodal").click(function(e) {
        if (! $(this).data("qtip")) {
            $("<iframe />")
                .attr("id", "contact_form")
                .attr("src", $(this).attr("href"))
                .css({width: "400px", height: "380px"})
                .hide().appendTo("body");
            $(this).qtip({
                id: 'modal', // Since we're only creating one modal, give it an ID so we can style it
                content: {
                    text: $("#contact_form"),
                    title: {
                        text: $(this).attr("title"),
                        button: true
                    }
                },
                position: {
                    my: 'center', // ...at the center of the viewport
                    at: 'center',
                    target: $(window)
                },
                show: {
                    event: e.type, // Show it on click...
                    solo: true, // ...and hide all other tooltips...
                    modal: true, // ...and make it modal
                    ready: true
                },
                hide: false,
                style: 'ui-tooltip-light ui-tooltip-rounded'
            });//*/
        }
        e.preventDefault();
    });
});
