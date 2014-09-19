jQuery(document).ready(function(){
        jQuery.get("https://spreadsheets.google.com/feeds/list/1-5v718r7ta_ZVWsYxZPJTY5p8_9zv312UD5tWuAF2X8/od6/public/values?alt=json",
                function( data ) {
                    var entries = data.feed.entry;
                    var row;
                    var totalraised = 0.0;
                    for(row = 0; row < entries.length; row++){
                        var entry = entries[row];
						var price = jQuery("#" + entry.gsx$productid["$t"] + " .price");
						var image = jQuery("#" + entry.gsx$productid["$t"] + " img");

                        totalraised += parseFloat(entry.gsx$sold["$t"].replace( /,/g, ''));

						price.text(entry.gsx$value["$t"]);
						
                        console.log(entries[row]);
                    }

                    var raised = jQuery("#raised");
                    totalraised = totalraised.toFixed(2);
                    raised.text("R$" + totalraised);
                    var porcentage = totalraised/50;
                    var progress_bar = jQuery("#money_progress");
                    progress_bar.css('width', porcentage + "%");
            });
        });
