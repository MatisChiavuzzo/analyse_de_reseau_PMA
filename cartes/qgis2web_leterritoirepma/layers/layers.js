ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2154").setExtent([958850.120195, 6697092.686060, 1020402.091070, 6731909.962515]);
var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'opacity': 0.350000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Dpartements_1 = new ol.format.GeoJSON();
var features_Dpartements_1 = format_Dpartements_1.readFeatures(json_Dpartements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Dpartements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dpartements_1.addFeatures(features_Dpartements_1);
var lyr_Dpartements_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dpartements_1, 
                style: style_Dpartements_1,
                popuplayertitle: 'Départements',
                interactive: true,
                title: '<img src="styles/legend/Dpartements_1.png" /> Départements'
            });
var format_Communes_2 = new ol.format.GeoJSON();
var features_Communes_2 = format_Communes_2.readFeatures(json_Communes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_2.addFeatures(features_Communes_2);
var lyr_Communes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_2, 
                style: style_Communes_2,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_2.png" /> Communes'
            });
var format_Communesayantunouplusieursarrts_3 = new ol.format.GeoJSON();
var features_Communesayantunouplusieursarrts_3 = format_Communesayantunouplusieursarrts_3.readFeatures(json_Communesayantunouplusieursarrts_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_Communesayantunouplusieursarrts_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesayantunouplusieursarrts_3.addFeatures(features_Communesayantunouplusieursarrts_3);
var lyr_Communesayantunouplusieursarrts_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesayantunouplusieursarrts_3, 
                style: style_Communesayantunouplusieursarrts_3,
                popuplayertitle: 'Communes (ayant un ou plusieurs arrêts)',
                interactive: true,
                title: '<img src="styles/legend/Communesayantunouplusieursarrts_3.png" /> Communes (ayant un ou plusieurs arrêts)'
            });
var format_EPCIPaysdeMontbliardAgglomration_4 = new ol.format.GeoJSON();
var features_EPCIPaysdeMontbliardAgglomration_4 = format_EPCIPaysdeMontbliardAgglomration_4.readFeatures(json_EPCIPaysdeMontbliardAgglomration_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_EPCIPaysdeMontbliardAgglomration_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EPCIPaysdeMontbliardAgglomration_4.addFeatures(features_EPCIPaysdeMontbliardAgglomration_4);
var lyr_EPCIPaysdeMontbliardAgglomration_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EPCIPaysdeMontbliardAgglomration_4, 
                style: style_EPCIPaysdeMontbliardAgglomration_4,
                popuplayertitle: 'EPCI - Pays de Montbéliard Agglomération',
                interactive: true,
    title: 'EPCI - Pays de Montbéliard Agglomération<br />\
    <img src="styles/legend/EPCIPaysdeMontbliardAgglomration_4_0.png" /> CA Pays de Montbéliard Agglomération<br />' });
var format_GaredeMontbliard_5 = new ol.format.GeoJSON();
var features_GaredeMontbliard_5 = format_GaredeMontbliard_5.readFeatures(json_GaredeMontbliard_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2154'});
var jsonSource_GaredeMontbliard_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GaredeMontbliard_5.addFeatures(features_GaredeMontbliard_5);
var lyr_GaredeMontbliard_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GaredeMontbliard_5, 
                style: style_GaredeMontbliard_5,
                popuplayertitle: 'Gare de Montbéliard',
                interactive: true,
                title: '<img src="styles/legend/GaredeMontbliard_5.png" /> Gare de Montbéliard'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_Dpartements_1.setVisible(true);lyr_Communes_2.setVisible(true);lyr_Communesayantunouplusieursarrts_3.setVisible(true);lyr_EPCIPaysdeMontbliardAgglomration_4.setVisible(true);lyr_GaredeMontbliard_5.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_Dpartements_1,lyr_Communes_2,lyr_Communesayantunouplusieursarrts_3,lyr_EPCIPaysdeMontbliardAgglomration_4,lyr_GaredeMontbliard_5];
lyr_Dpartements_1.set('fieldAliases', {'ID': 'ID', 'NOM': 'NOM', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'CODE_SIREN': 'CODE_SIREN', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Communes_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_Communesayantunouplusieursarrts_3.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_CAN': 'INSEE_CAN', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SUPERF_CAD': 'SUPERF_CAD', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'CODE_SIREN': 'CODE_SIREN', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_EPCIPaysdeMontbliardAgglomration_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM': 'NOM', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'INSEE_COM': 'INSEE_COM', 'INSEE_DEP': 'INSEE_DEP', 'ID_AUT_ADM': 'ID_AUT_ADM', });
lyr_GaredeMontbliard_5.set('fieldAliases', {'fid': 'fid', });
lyr_Dpartements_1.set('fieldImages', {'ID': 'TextEdit', 'NOM': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', });
lyr_Communes_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SUPERF_CAD': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_Communesayantunouplusieursarrts_3.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_CAN': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'TextEdit', 'SUPERF_CAD': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_EPCIPaysdeMontbliardAgglomration_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'INSEE_COM': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', });
lyr_GaredeMontbliard_5.set('fieldImages', {'fid': 'TextEdit', });
lyr_Dpartements_1.set('fieldLabels', {'ID': 'hidden field', 'NOM': 'inline label - always visible', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'CODE_SIREN': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Communes_2.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'inline label - always visible', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SUPERF_CAD': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_Communesayantunouplusieursarrts_3.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'INSEE_COM': 'inline label - always visible', 'INSEE_CAN': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'inline label - always visible', 'SUPERF_CAD': 'inline label - always visible', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'CODE_SIREN': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_EPCIPaysdeMontbliardAgglomration_4.set('fieldLabels', {'fid': 'hidden field', 'ID': 'hidden field', 'NOM': 'inline label - always visible', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_DEP': 'hidden field', 'ID_AUT_ADM': 'hidden field', });
lyr_GaredeMontbliard_5.set('fieldLabels', {'fid': 'hidden field', });
lyr_GaredeMontbliard_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});