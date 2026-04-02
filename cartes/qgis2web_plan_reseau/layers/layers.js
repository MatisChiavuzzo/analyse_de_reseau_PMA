ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([963964.060406, 6702092.335676, 1019793.512448, 6733672.631780]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Communes_1 = new ol.format.GeoJSON();
var features_Communes_1 = format_Communes_1.readFeatures(json_Communes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_1.addFeatures(features_Communes_1);
var lyr_Communes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_1, 
                style: style_Communes_1,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_1.png" /> Communes'
            });
var format_Lignesdebus_2 = new ol.format.GeoJSON();
var features_Lignesdebus_2 = format_Lignesdebus_2.readFeatures(json_Lignesdebus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Lignesdebus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lignesdebus_2.addFeatures(features_Lignesdebus_2);
var lyr_Lignesdebus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lignesdebus_2, 
                style: style_Lignesdebus_2,
                popuplayertitle: 'Lignes de bus',
                interactive: true,
    title: 'Lignes de bus<br />\
    <img src="styles/legend/Lignesdebus_2_0.png" /> A<br />\
    <img src="styles/legend/Lignesdebus_2_1.png" /> B<br />\
    <img src="styles/legend/Lignesdebus_2_2.png" /> C<br />\
    <img src="styles/legend/Lignesdebus_2_3.png" /> D<br />\
    <img src="styles/legend/Lignesdebus_2_4.png" /> E<br />\
    <img src="styles/legend/Lignesdebus_2_5.png" /> F<br />\
    <img src="styles/legend/Lignesdebus_2_6.png" /> H<br />\
    <img src="styles/legend/Lignesdebus_2_7.png" /> N<br />\
    <img src="styles/legend/Lignesdebus_2_8.png" /> T1<br />\
    <img src="styles/legend/Lignesdebus_2_9.png" /> T2<br />\
    <img src="styles/legend/Lignesdebus_2_10.png" /> T3<br />\
    <img src="styles/legend/Lignesdebus_2_11.png" /> T4<br />\
    <img src="styles/legend/Lignesdebus_2_12.png" /> T5<br />\
    <img src="styles/legend/Lignesdebus_2_13.png" /> X<br />\
    <img src="styles/legend/Lignesdebus_2_14.png" /> Z<br />\
    <img src="styles/legend/Lignesdebus_2_15.png" /> <br />' });
var format_Arrtsdebus_3 = new ol.format.GeoJSON();
var features_Arrtsdebus_3 = format_Arrtsdebus_3.readFeatures(json_Arrtsdebus_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Arrtsdebus_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arrtsdebus_3.addFeatures(features_Arrtsdebus_3);
var lyr_Arrtsdebus_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arrtsdebus_3, 
                style: style_Arrtsdebus_3,
                popuplayertitle: 'Arrêts de bus',
                interactive: true,
                title: '<img src="styles/legend/Arrtsdebus_3.png" /> Arrêts de bus'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Communes_1.setVisible(true);lyr_Lignesdebus_2.setVisible(true);lyr_Arrtsdebus_3.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Communes_1,lyr_Lignesdebus_2,lyr_Arrtsdebus_3];
lyr_Communes_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Lignesdebus_2.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'i': 'i', 'j': 'j', 'ij': 'ij', });
lyr_Arrtsdebus_3.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'descriptio': 'descriptio', 'id': 'id', 'name': 'name', 'route_colo': 'route_colo', 'route_id': 'route_id', 'route_long': 'route_long', 'route_shor': 'route_shor', 'route_text': 'route_text', 'wheelchair': 'wheelchair', });
lyr_Communes_1.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'TextEdit', 'SUPERF_CAD': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_Lignesdebus_2.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'i': 'TextEdit', 'j': 'TextEdit', 'ij': 'TextEdit', });
lyr_Arrtsdebus_3.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'descriptio': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_colo': 'TextEdit', 'route_id': 'TextEdit', 'route_long': 'TextEdit', 'route_shor': 'TextEdit', 'route_text': 'TextEdit', 'wheelchair': 'TextEdit', });
lyr_Communes_1.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'inline label - always visible', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'inline label - always visible', 'SUPERF_CAD': 'inline label - always visible', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Lignesdebus_2.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'inline label - always visible', 'route_short_name': 'inline label - always visible', 'route_text_color': 'hidden field', 'wheelchair_boarding': 'hidden field', 'i': 'hidden field', 'j': 'hidden field', 'ij': 'hidden field', });
lyr_Arrtsdebus_3.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'descriptio': 'hidden field', 'id': 'hidden field', 'name': 'inline label - always visible', 'route_colo': 'hidden field', 'route_id': 'hidden field', 'route_long': 'hidden field', 'route_shor': 'hidden field', 'route_text': 'hidden field', 'wheelchair': 'hidden field', });
lyr_Arrtsdebus_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});