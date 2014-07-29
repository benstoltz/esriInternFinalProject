define([
    'dijit/_WidgetBase',
    'dijit/_TemplatedMixin',

    'esri/dijit/editing/Editor-all',

    'dojo/_base/declare',

    'dojo/text!./templates/EditorBar.html'
], function(
    _WidgetBase, _TemplatedMixin,
    Editor,
    declare,
    template) {
    return declare([_WidgetBase, _TemplatedMixin], {

        templateString: template,

        _initEditing: function() {
            var map = this.map;
            var incidentLayer = this.map.getLayer('incidentsLayer');

            var templatePicker = new esri.dijit.editing.TemplatePicker({
                featureLayers: [incidentLayer],
                rows: 'auto',
                groupingEnabled: true,
                columns: 2
            }, 'editorNode');
            templatePicker.startup();

            var layerInfos = [{}]



        }
    });
});