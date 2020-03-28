/*
 * Central repository of options to change when forking this map!
 */

var config = {
	//Set Map Bounds & point map is centered around
	mapFocus : [53.4318256, 14.5596434],
	south : 53.316457 ,
	west : 14.424725,
	north : 53.549168,
	east : 14.807520,
	//Mapbox access token & key for basemap
	mapboxAccessToken :              
            'pk.eyJ1IjoicmVtb3RlZ2VudHJpZnkiLCJhIjoiY2lnanJzMjJpMDA1dnYxbHo5MTZtdGZsYSJ9.gLE8d40zmDAtMSSZyd2h1Q',
    //Change to your username, insert function on cartodb, and cartodb tablename (see also /cartoDB_functions)
	cartoDBusername : 'pio8909',
	cartoDBinsertfunction : 'insert_bikeways_data',
	walkthroughWelcome: "<p>Jesteś na platformie stwożonej przez <a href='https://www.facebook.com/ZdrowaPrzestrzen/' target='_blank'>Zdrowa Przestrzeń Piotr Kaszczyszyn</a> w celu przeprowadzania badań naukowych, które mają na celu opracowanie nowych rozwiązań dla poprawy jakości życia w mieście oraz regionie. Rezultaty badań będą opublikowane w artykule naukowym.</p><p>W niniejszej ankiecie będziesz poproszony o wrysowanie na mapie ścieżek, którymi poruszasz się pieszo oraz zaznaczenie punktami miejsc istotnych podczas przebywania w przestrzeni miejskiej. Naniesione ścieżki i punkty będą przesyłane do mojej bazy danych, która posłyży mi do wykonania szczegółowych badań. Mapa skupia się w granicach miasta Szczecin.</p>"
	walkthroughIntro: "<p>Proszę zapoznaj się, z krótkim opisem pozwalającym zrozumieć zastosowaną terminologię użytą w niniejszej ankiecie. W ankiecie użyto terminów różnych rodzajów aktywności, tj: konieczna, opcjonalna, społeczna i mieszana.</p><p>Aktywność konieczna to taka, którą muszisz podejmować (np. chodzenie do pracy czy szkoły, czekanie na autobus, roznoszenie poczty).</p><p>Aktywność opcjonalna (rekreacyjna), to spacer nabrzeżem, przystawanie, gdy coś zwróci naszą uwagę, siedzenie, by cieszyć się widokiem lub pogodą.</p><p>Aktywności społeczne, to przy których przestrzeń miejska jest używana jako miejsce spotkań (tych spontanicznych jak i zaplanowanych). Tu spektrum jest szerokie i zaczyna się od zwykłej rozmowy z przypadkowo napotkaną osobą - np. pytanie odrogę, przez zabawę dzieci lub wspólne spędzanie czasu przez młodzież lub osoby starsze. Po Mniej lub bardziej zaplanowane wspólne aktywności: imprezy uliczne, spotkania, demonstracje, wspólne zwiedzanie/fotografowanie.</p><p>Aktywności mieszane, to takie, które wiążą się z koniecznością wyjścia np. po zakupy, gdzie mimo możliwości dotarcia do sklepu autem, wybieramy spacer z dzieckiem/partnerem/rodziną lub w pojedynkę itp..</p>"
};
