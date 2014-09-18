jQuery(document).ready(function(){
        jQuery.get("https://spreadsheets.google.com/feeds/list/1-5v718r7ta_ZVWsYxZPJTY5p8_9zv312UD5tWuAF2X8/od6/public/values?alt=json",
                function( data ) {
                    var entries = data.feed.entry;
                    var row;
                    for(row = 0; row < entries.length; row++){
                        var entry = entries[row];
						var price = jQuery("#" + entry.gsx$productid["$t"] + " .price");
						var image = jQuery("#" + entry.gsx$productid["$t"] + " img");

						price.text(entry.gsx$value["$t"]);

						if(entry.gsx$image["$t"]){
							image.attr("src", entry.gsx$image["$t"]);
						}
						
                        console.log(entries[row]);
                    }
            });
        });
