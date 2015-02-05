'use strict';

angular.module('remont')
    .controller('WorkPreviewCtrl', ['$scope', '$state', function ($scope, $state) {
        var worksPreviewInfo = {
            "1":{
                "heading": "Clanricarde Gardens, Notting Hill",
                "description": "<p>Clanricarde Gardens was a refurbishment project of a Victorian property in London. The main concept with the flat was to modernise and to maximise storage whilst retaining the key Victorian elements of the property.</p><p>In the open plan lounge / kitchen, the Ardesia Design trademark in-built, modular storage wall was installed to be used for display and as an interesting focal point in the room.</p><p>The kitchen was fitted with cleverly customised IKEA cabinets and a gorgeous kitchen island with a man-made stone top. The in-built kitchen island creates additional worktop space but also acts as seated dining space, removing the necessity for a space-consuming dining table. Every inch of kitchen storage is utilised to 100% efficiency and all the white goods have been cleverly integrated within the kitchen without eating into the kitchen storage.</p><p>In the bedroom, custom in-built cabinets were designed that conceal the entrance to the en-suite. With the doors closed, the wall appears to be only cabinets. The doors then open flush with the doorframe to reveal the entrance to the en-suite.</p><p>The alignment of the shower and the doorway creates symmetry with the window in the bedroom, which allows a lovely wave of natural light into the windowless shower room when the doors are open. The positioning of the shower screen directly in front of the doorway is a bit tongue-in-cheek - perhaps not for everyone’s tastes but fits perfectly with this young, modern flat. Both bathrooms are finished in polished plaster, or Marmorino, from Italy. LED-lit niches were in-built into the bathrooms to provide further storage space.</p><p>The flat was furnished minimally but the quirky antique accessories from Dutch company One World Interiors complement the simplicity of the design and give it that finishing touch.</p>",
                "photos": [
                    "assets/images/1/1.jpg",
                    "assets/images/1/2.jpg",
                    "assets/images/1/3.jpg",
                    "assets/images/1/4.jpg"
                ]
            },
            "2":{
                "heading": "Canton De Vaud, Switzerland",
                "description": "<p>This house was an interior design and full refurbishment project for a client living in Vaud, Switzerland. The project brief was especially focused on lighting design, as the client was an avid art collector and wanted to light up and create focal points around the various pieces of artwork hung around the house. Therefore, the rest of the design was kept quite light and minimal so as not to draw attention away from the art.</p><p>The house previously contained four bedrooms, which we opened up and created three bedrooms, one with a large en-suite dressing room. We also adapted the space to create custom storage space for paintings.</p><p>We changed the layout of the entire house, opening up the living and dining area into a sizeable open plan room. A new wooden floor was fitted throughout and the existing wooden beams in the ceilings were painted with a white-washed look to match the floor.</p><p>The kitchen was custom made in Italy and finished with a Pietra del Cardoso stone work top and a backsplash with a colour-changing LED light.</p><p>The furniture is a mix of Italian and Dutch imported furniture, as well as some key pieces from the Client's own antique collection.</p><p>In the bathrooms, we created interesting lighting details below and above the mirrors with LED strip lights. The master bathroom was finished with splitfaced limestone and equipped with custom in-built joinery and walk-in showers. The basin and shone shelf below were custom made in stone and the sanitaryware is all from Zucchetti.</p><p>In the staircase, a minimal glass ballustrade was installed with a fixing detail in the stair groove so that the glass looks frameless with no brackets or handrail. The hallway pendant light is by Bocci.</p>",
                "photos": [
                    "assets/images/2/1.jpg",
                    "assets/images/2/2.jpg",
                    "assets/images/2/3.jpg",
                    "assets/images/2/4.jpg",
                    "assets/images/2/5.jpg",
                    "assets/images/2/6.jpg"
                ]
            },
            "3":{
                "heading": "Shawfield Street, Chelsea",
                "description": "<p>Shawfield Street was a refurbishment project for a private client's home in London. This was the second refurbishment we have completed for the same client. The building was in good condition so we conducted a soft refurbishment and interior fit-out to reformat the house for the client’s needs. The style of this project was classic and elegant with emphasis on custom joinery and soft furnishings.</p><p>The house consisted of two living rooms – one for the family and one for entertaining (reception room). The furniture is from well-known Italian brands such as B&B Italia, Flexform and Poliform. The curtains and blinds were custom made. The rugs are custom made by Tai Ping rugs. The antique furniture and paintings are from the client’s own collection.</p><p>The bathroom was re-tiled with natural limestone tiles and a feature wall of Italian Mutina tiles. The large-format mirror was cut and installed in one piece.</p><p>We also designed a series of custom pieces of furniture and other joinery for the flat, including a custom TV cabinet with sliding or rotating shelves for easier access to cables, a custom computer table with printer cabinet, a custom console table in the spare room and custom bed side tables for the two upstairs bedrooms. The wardrobe doors were also replaced with custom made doors with a raised panel design.</p>",
                "photos": [
                    "assets/images/3/1.jpg",
                    "assets/images/3/2.jpg",
                    "assets/images/3/3.jpg",
                    "assets/images/3/4.jpg"
                ]
            },
            "4":{
                "heading": "Oakhill Court, Putney",
                "description": "<p>Our Oakhill Court project in Putney was a flat within an imposing Mansion block. The building itself was grand and the flat well proportioned with lovely original features but lacking in natural light.</p><p>The brief was to bring back the Victorian charm and to maximise the feel of natural light entering the property, using light colours and Scandinavian minimal touches.</p><p>The 100sqm flat originally contained only one, small bathroom. With some clever moving of doorways, we converted the box room into a main bathroom and integrated the existing bathroom into the master bedroom, forming an en-suite with some custom-made double doors.</p><p>We designed many new in-built pieces of joinery, from shelving units to wardrobes, all constructed and finished on site. The joinery doors were detailed with Victorian style moldings to accentuate the classic charm of the property and to fit in with the detailing on the original fireplaces. These mouilding details are present in all rooms of the flat to unify the spaces.</p><p>The joinery was also fitted with LED lighting to improve the ambient lighting in the rooms. The opening up and widening of the living room doors from a single door to glazed double doors also helped to allow in more natural light.</p><p>The old parquet was replaced with a new solid block hardwood parquet, sanded, stained and oiled on site.</p><p>The original coving was replaced with new coving of a similar, classic design.</p><p>The kitchen finish was selected in a rustic wood-look and the floor tiles in a matching, wood-look finish. To keep the room more light and neutral, the wall cabinets were chosen in an off-white, the worktop in a matching off-white quartz and, to reflect the Victorian period, the backsplash was finished with white metro tiles.</p><p>The same metro tiles were used in the bathrooms in a grey colour, with a warmer wood effect floor tile and some feature details using a Victorian print blue tile with a fabric-like texture.  The more modern-look blue tiles and modern Stark toilet and Geberit flush plate keep the bathrooms looking fresh in contrast with the client's choice of more traditional sanitaryware for the basins, taps and shower sets.</p><p>The success of the Victorian-meets-modern-Scandinavian look was helped enormously by the client's attention to detail in sourcing everything from the switches and sockets to the door hinges and handles in an antique brass finish.</p><p>The property feels freshly refurbished but sensitively in keeping with the Victorian look of the building in which it sits.</p>",
                "photos": [
                    "assets/images/4/1.jpg",
                    "assets/images/4/2.jpg",
                    "assets/images/4/3.jpg",
                    "assets/images/4/4.jpg"
                ]
            },
            "5":{
                "heading": "Chalet Gsteig, Switzerland",
                "description": "<p>Chalet Gsteig was a project for a Swiss client's holiday home in the Alps, which needed light internal refurbishment and redecoration. The colour palette focused strongly on natural materials, textures and fabrics. All the soft furnishings for this project were custom designed for each room. The brief was to create a soft but elegant look.</p><p>The chalet consists of three bedrooms and two bathrooms of which one is an en-suite for the master bedroom.</p><p>A new wooden floor was fitted throughout and a new kitchen from Italy was fitted, finished in a textured wood that matched and contrasted simultaneously with the wooden walls of the chalet.</p><p>The project focused heavily on furniture sourcing and designing custom bedlinens, curtains and other soft furnishings. The headboards for the bedrooms were made in London and shipped to Switzerland, finished in fabric to match the curtains and throws. The cushions ware from England, custom finished with piping to match the bedlinen detailing. The bedlinens were from Italy and were custom designed for the project, from pillow cover edging to the sourcing of the finest linen fabric.</p><p>The bedroom side tables were made from reclaimed wood sourced from Canadian barns and custom made to the designer's specification. The armchairs in the bedrooms are from Spain. The heavy wooden side tables in the living room were also custom made to size.</p>",
                "photos": [
                    "assets/images/5/1.jpg",
                    "assets/images/5/2.jpg",
                    "assets/images/5/3.jpg",
                    "assets/images/5/4.jpg"
                ]
            },
            "6":{
                "heading": "Embankment Gardens, Chelsea",
                "description": "<p>This lovely, characterful yet very compact flat on the fourth floor of a mansion block on Embankment Gardens exceeded our expectations in terms of storage and natural light.</p><p>The flat was in need of a drastic re-haul, with retrospectively fitted insulation in the floor which had resulted in an uncomfortable 15cm step within the flat, a lack of storage and a very outdated bathroom. Additionally, the flat had only an oven and hob as a kitchen - not even a kitchen sink.</p><p>The brief was to modernise the flat and to maximise the natural light, making the space feel warm and inviting, and to improve the storage capacity while avoid making the 22sqm space feel cramped.</p><p>The client, who lives abroad, intended to use the flat as a weekend home for the family, so it was important to keep the separate bedroom for the children, rather than to try and open the space up to open plan.</p><p>We designed some joinery to be built on-site with clever integrated storage for bedlinens - the tops of the cabinets have 'lids', concealing an internal storage chest.</p><p>In the bedroom, the LED-lit workspace doubles as a drawing desk for the children, with irregular shelving above for displaying favourite toys and cabinet storage above to hide clutter.</p><p>In the living room, the joinery takes on a more sophisticated look, with a mirror fitted behind to create the illusion of more space.</p><p>The kitchen and hallway wardrobes were chosen with a 'linen effect' finish in two different colours to break up the colour, as the cabinets were sized to fit fully to the 2.7m ceiling. The linen feel was continued throughout, to the feature wallpaper in the bedroom, to the lampshades and to the fabric of the blinds and the sofas.</p><p>To break up the linen feel, a carrara marble worktop and full backsplash were fitted, creating a bit of contrast to the texture and colour of the cabinets.</p><p>The walls and custom on-site joinery were kept white and the floor finish in a colour called 'blanco' (white) - to reflect as much natural light as possible.</p><p>Due to the size of the bathroom, we opted for a Scandinavian wetroom style design without a shower screen and to add some fun and colour to the otherwise minimal flat, we designed a feature wall using three different colours of hexagon shaped tiles.</p><p>Limited in size but full of potential, this is a project that needs to be seen in relation to the 'before' photos to truly be appreciated.</p>",
                "photos": [
                    "assets/images/6/1.jpg",
                    "assets/images/6/2.jpg",
                    "assets/images/6/3.jpg",
                    "assets/images/6/4.jpg"
                ]
            }
        };
        function preloadImgs(){
            var imgsArr = worksPreviewInfo[$state.params.id].photos;

            imgsArr.map(function(el){
                var img = new Image();
                img.src = el;

            });
        }

        $scope.worksPreviewInfo = worksPreviewInfo[$state.params.id];
        console.log('WorkPreviewCtrl is working properly');
    }]);
