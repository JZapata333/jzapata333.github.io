/* global $ _ */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        console.log(data);
        
        let i = 0;
        $('#pic-billy').on('click', function(event) {
            if (i === data.images.billy.length - 1) i = -1;
            i++;
            let newPicture = data.images.billy[i];
            $('#pic-billy').attr("src", newPicture).one('load', function() {
                console.log('it did');
            });
            
            // console.log(event.currentTarget);
        });
        
        
        /* 0. 
         * Style the #section-bio and #section-quotes as per some of the 
         * examples we tried in the console.
         */
        $('#section-bio').css('font-family', 'monospace').css('border', 'black');
        $('#section-quotes').css('font-style', 'italic');
        /*
         * 1. Populate the #list-top-rated <ul>:33
         *
         * Loop through the top rated recordings of Billy Higgins, and, 
         * using lodash, add a styled <li> for each recording. Inspect a 
         * recording object in the console to view its available properties.
         *
         * How can you use _.map() to your advantage here?
         */
        let topRated = data.discography.topRated;
        let topRatedQuery = _.map(topRated, function(recording) {
            return $("<li>")
                .append($('<div>').text('Title: ' + recording.title).addClass('title'))
                .append($('<div>').text('Artist: ' + recording.artist).addClass('artist'))
                .append($('<div>').text('Release: ' + recording.release).addClass('release'))
                .append($('<div>').text('Year: ' + recording.year).addClass('year'));
                // .text(recording.title + "," + recording.artist + "," + recording.release + "," + recording.year);
            
            // console.log(recording);
        });
        
        $('#list-top-rated').append(topRatedQuery);
        
        /*
         * 2. Create a discography <section>:
         *      a. Create a discography <section id="section-disc"> and add it 
         *         below the #section-quotes on the 
         *         index.html page.
         * 
         *      b. Create a <ul id="list-disc">, style it, and add it to the 
         *         <section id="section-disc">.
         * 
         *      c. Add a styled <li class="recording"> for every recording in 
         *         the recordings Array. What lodash methods can help you here?
         *
         *      d. Add CSS styling rules to the site.css file to style the list
         *
         *      The resulting HTML should look something like this:
         *
         *         <section id="section-disc">
         *           <ul id="list-disc">
         *               <li class="recording">
         *                   <div class="title">Title: Eastern Rebellion</div>
         *                   <div class="artist">Artist: Cedar Walton</div>
         *                   <div class="release">Release: Timeless</div>
         *                   <div class="year">Year: 1976</div>
         *               </li>
         *           </ul>
         *       </section>
         */
         let discography = data.discography.recordings;
         $('<section>').attr('id', 'section-disc').appendTo('#sections');
         $('<ul>').attr('id', 'list-disc').appendTo('#section-disc');
         
         $('<div>').attr('id', 'img').appendTo('.sidebar');
         $('<img>').attr('id', 'art').attr('src', "images/album/eastern-rebellion.jpg").appendTo('#img');
         
         let discographyQuery = _.map(discography, function(recording) {
            return $('<li>').addClass('recording')
                .append($('<div>').text('Title: ' + recording.title).addClass('title'))
                .append($('<div>').text('Artist: ' + recording.artist).addClass('artist'))
                .append($('<div>').text('Release: ' + recording.release).addClass('release'))
                .append($('<div>').text('Year: ' + recording.year).addClass('year'))
                    .on('click', function() {
                        $('#art').attr('src', recording.art);
                    });
         });
         
         $('#list-disc').append(discographyQuery);
         /*
          * 3. Below the <section id="section-disc">, create a new section for 
          * Billy's rider. Use jQuery to assemble a table to display the rider 
          * data. The rider data is at data.rider
          */
          
          
          let rider = data.rider;
          $('<section>').attr('id', 'section-rider').appendTo('#section-disc');
          $('<table>').attr('id', 'table').appendTo('#section-rider');
          let riderQuery = _.map(rider, function(tablerider) {
              return $('<tr>')
                    .append($('<td>').text(tablerider.type).addClass('drum'))
                    .append($('<td>').text(tablerider.desc).addClass('drum'));
          });
          
          let riderHeader = $('<tr>').append()
            .append($("<th>").text("Equipment"))
            .append($("<th>").text("Description"));
          
          $('#table').append(riderHeader).append(riderQuery);
          
        //  console.log(data.rider);
        
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

// $('.recording').on('click', replaceImage); consider hover instead.
