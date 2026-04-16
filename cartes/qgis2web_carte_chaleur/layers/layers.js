ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([965001.976790, 6698832.288768, 1008342.915957, 6734814.253072]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_10minutes_1 = new ol.format.GeoJSON();
var features_10minutes_1 = format_10minutes_1.readFeatures(json_10minutes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_10minutes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_10minutes_1.addFeatures(features_10minutes_1);
var lyr_10minutes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_10minutes_1, 
                style: style_10minutes_1,
                popuplayertitle: '10 minutes',
                interactive: false,
                title: '<img src="styles/legend/10minutes_1.png" /> 10 minutes'
            });
var format_9minutes_2 = new ol.format.GeoJSON();
var features_9minutes_2 = format_9minutes_2.readFeatures(json_9minutes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_9minutes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_9minutes_2.addFeatures(features_9minutes_2);
var lyr_9minutes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_9minutes_2, 
                style: style_9minutes_2,
                popuplayertitle: '9 minutes',
                interactive: false,
                title: '<img src="styles/legend/9minutes_2.png" /> 9 minutes'
            });
var format_8minutes_3 = new ol.format.GeoJSON();
var features_8minutes_3 = format_8minutes_3.readFeatures(json_8minutes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_8minutes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_8minutes_3.addFeatures(features_8minutes_3);
var lyr_8minutes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_8minutes_3, 
                style: style_8minutes_3,
                popuplayertitle: '8 minutes',
                interactive: false,
                title: '<img src="styles/legend/8minutes_3.png" /> 8 minutes'
            });
var format_7minutes_4 = new ol.format.GeoJSON();
var features_7minutes_4 = format_7minutes_4.readFeatures(json_7minutes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_7minutes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_7minutes_4.addFeatures(features_7minutes_4);
var lyr_7minutes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_7minutes_4, 
                style: style_7minutes_4,
                popuplayertitle: '7 minutes',
                interactive: false,
                title: '<img src="styles/legend/7minutes_4.png" /> 7 minutes'
            });
var format_6minutes_5 = new ol.format.GeoJSON();
var features_6minutes_5 = format_6minutes_5.readFeatures(json_6minutes_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_6minutes_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6minutes_5.addFeatures(features_6minutes_5);
var lyr_6minutes_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6minutes_5, 
                style: style_6minutes_5,
                popuplayertitle: '6 minutes',
                interactive: false,
                title: '<img src="styles/legend/6minutes_5.png" /> 6 minutes'
            });
var format_5minutes_6 = new ol.format.GeoJSON();
var features_5minutes_6 = format_5minutes_6.readFeatures(json_5minutes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_5minutes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5minutes_6.addFeatures(features_5minutes_6);
var lyr_5minutes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5minutes_6, 
                style: style_5minutes_6,
                popuplayertitle: '5 minutes',
                interactive: false,
                title: '<img src="styles/legend/5minutes_6.png" /> 5 minutes'
            });
var format_4minutes_7 = new ol.format.GeoJSON();
var features_4minutes_7 = format_4minutes_7.readFeatures(json_4minutes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_4minutes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4minutes_7.addFeatures(features_4minutes_7);
var lyr_4minutes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4minutes_7, 
                style: style_4minutes_7,
                popuplayertitle: '4 minutes',
                interactive: false,
                title: '<img src="styles/legend/4minutes_7.png" /> 4 minutes'
            });
var format_3minutes_8 = new ol.format.GeoJSON();
var features_3minutes_8 = format_3minutes_8.readFeatures(json_3minutes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_3minutes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3minutes_8.addFeatures(features_3minutes_8);
var lyr_3minutes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3minutes_8, 
                style: style_3minutes_8,
                popuplayertitle: '3 minutes',
                interactive: false,
                title: '<img src="styles/legend/3minutes_8.png" /> 3 minutes'
            });
var format_2minutes_9 = new ol.format.GeoJSON();
var features_2minutes_9 = format_2minutes_9.readFeatures(json_2minutes_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_2minutes_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2minutes_9.addFeatures(features_2minutes_9);
var lyr_2minutes_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2minutes_9, 
                style: style_2minutes_9,
                popuplayertitle: '2 minutes',
                interactive: false,
                title: '<img src="styles/legend/2minutes_9.png" /> 2 minutes'
            });
var format_1minute_10 = new ol.format.GeoJSON();
var features_1minute_10 = format_1minute_10.readFeatures(json_1minute_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_1minute_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1minute_10.addFeatures(features_1minute_10);
var lyr_1minute_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1minute_10, 
                style: style_1minute_10,
                popuplayertitle: '1minute',
                interactive: false,
                title: '<img src="styles/legend/1minute_10.png" /> 1minute'
            });
var format_Commune_11 = new ol.format.GeoJSON();
var features_Commune_11 = format_Commune_11.readFeatures(json_Commune_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Commune_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Commune_11.addFeatures(features_Commune_11);
var lyr_Commune_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Commune_11, 
                style: style_Commune_11,
                popuplayertitle: 'Commune',
                interactive: true,
                title: '<img src="styles/legend/Commune_11.png" /> Commune'
            });
var group_Isochrones = new ol.layer.Group({
                                layers: [lyr_10minutes_1,lyr_9minutes_2,lyr_8minutes_3,lyr_7minutes_4,lyr_6minutes_5,lyr_5minutes_6,lyr_4minutes_7,lyr_3minutes_8,lyr_2minutes_9,lyr_1minute_10,],
                                fold: 'open',
                                title: 'Isochrones'});

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_10minutes_1.setVisible(true);lyr_9minutes_2.setVisible(true);lyr_8minutes_3.setVisible(true);lyr_7minutes_4.setVisible(true);lyr_6minutes_5.setVisible(true);lyr_5minutes_6.setVisible(true);lyr_4minutes_7.setVisible(true);lyr_3minutes_8.setVisible(true);lyr_2minutes_9.setVisible(true);lyr_1minute_10.setVisible(true);lyr_Commune_11.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,group_Isochrones,lyr_Commune_11];
lyr_10minutes_1.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_9minutes_2.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_8minutes_3.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_7minutes_4.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_6minutes_5.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_5minutes_6.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_4minutes_7.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_3minutes_8.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_2minutes_9.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_1minute_10.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'description': 'description', 'id': 'id', 'name': 'name', 'route_color': 'route_color', 'route_id': 'route_id', 'route_long_name': 'route_long_name', 'route_short_name': 'route_short_name', 'route_text_color': 'route_text_color', 'wheelchair_boarding': 'wheelchair_boarding', 'CostValue': 'CostValue', 'X': 'X', 'Y': 'Y', });
lyr_Commune_11.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_10minutes_1.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_9minutes_2.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_8minutes_3.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_7minutes_4.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_6minutes_5.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_5minutes_6.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_4minutes_7.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_3minutes_8.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_2minutes_9.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_1minute_10.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'description': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'route_color': 'TextEdit', 'route_id': 'TextEdit', 'route_long_name': 'TextEdit', 'route_short_name': 'TextEdit', 'route_text_color': 'TextEdit', 'wheelchair_boarding': 'TextEdit', 'CostValue': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Commune_11.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'TextEdit', 'SUPERF_CAD': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_10minutes_1.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'description': 'no label', 'id': 'no label', 'name': 'no label', 'route_color': 'no label', 'route_id': 'no label', 'route_long_name': 'no label', 'route_short_name': 'no label', 'route_text_color': 'no label', 'wheelchair_boarding': 'no label', 'CostValue': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_9minutes_2.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'description': 'no label', 'id': 'no label', 'name': 'no label', 'route_color': 'no label', 'route_id': 'no label', 'route_long_name': 'no label', 'route_short_name': 'no label', 'route_text_color': 'no label', 'wheelchair_boarding': 'no label', 'CostValue': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_8minutes_3.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'description': 'no label', 'id': 'no label', 'name': 'no label', 'route_color': 'no label', 'route_id': 'no label', 'route_long_name': 'no label', 'route_short_name': 'no label', 'route_text_color': 'no label', 'wheelchair_boarding': 'no label', 'CostValue': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_7minutes_4.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'description': 'no label', 'id': 'no label', 'name': 'no label', 'route_color': 'no label', 'route_id': 'no label', 'route_long_name': 'no label', 'route_short_name': 'no label', 'route_text_color': 'no label', 'wheelchair_boarding': 'no label', 'CostValue': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_6minutes_5.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'description': 'no label', 'id': 'no label', 'name': 'no label', 'route_color': 'no label', 'route_id': 'no label', 'route_long_name': 'no label', 'route_short_name': 'no label', 'route_text_color': 'no label', 'wheelchair_boarding': 'no label', 'CostValue': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_5minutes_6.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'hidden field', 'route_short_name': 'hidden field', 'route_text_color': 'no label', 'wheelchair_boarding': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_4minutes_7.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'hidden field', 'route_short_name': 'hidden field', 'route_text_color': 'hidden field', 'wheelchair_boarding': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_3minutes_8.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'hidden field', 'route_short_name': 'hidden field', 'route_text_color': 'hidden field', 'wheelchair_boarding': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_2minutes_9.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'hidden field', 'route_short_name': 'hidden field', 'route_text_color': 'hidden field', 'wheelchair_boarding': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_1minute_10.set('fieldLabels', {'fid': 'hidden field', 'code': 'hidden field', 'description': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'route_color': 'hidden field', 'route_id': 'hidden field', 'route_long_name': 'hidden field', 'route_short_name': 'hidden field', 'route_text_color': 'hidden field', 'wheelchair_boarding': 'hidden field', 'CostValue': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Commune_11.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'inline label - always visible', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'inline label - always visible', 'SUPERF_CAD': 'inline label - always visible', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Commune_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});