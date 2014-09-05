jQuery(document).ready(function(){
        jQuery.get("https://spreadsheets.google.com/feeds/list/1-5v718r7ta_ZVWsYxZPJTY5p8_9zv312UD5tWuAF2X8/od6/public/values?alt=json",
                function( data ) {
                    var entries = data.feed.entry;
                    var row;
                    for(row = 0; row < entries.length; row++){
                        
                        console.log(entries[row]);
                    }
            });
        });
