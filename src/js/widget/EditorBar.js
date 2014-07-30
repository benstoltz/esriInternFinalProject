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

        postCreate: function() {
            this.inherited(arguments);
            this._initEditing();
        },

        _initEditing: function(newMap) {
            this.map = newMap;
            var incidentLayer = this.map.getLayer('incidentsLayer');

            var templatePicker = new esri.dijit.editing.TemplatePicker({
                featureLayers: [incidentLayer],
                rows: 'auto',
                groupingEnabled: true,
                columns: 2
            }, this.editorNode);
            templatePicker.startup();

            var layerInfos = [{
                'featureLayer': featureLayer,
                'showAttachments': false,
                'showDeleteButton': false,
                'fieldInfos': [
                    {'fieldName': 'event_type', 'label': 'Incident'},
                    {'fieldName': 'services_requested', 'label': 'Emergency Services'},
                    {'fieldName': 'event_description', 'label': 'Incident Description', 'stringFieldOption': esri.dijit.AttributeInspector.STRING_FIELD_OPTION_TEXTAREA},
                    {'fieldName': 'number_injured', 'label': 'Number of Injured'},
                    {'fieldName': 'reporter_contact', 'label': 'Contact Number'},
                    {'fieldName': 'severity', 'label': 'Severity of Incident'}
                ]
            }];

            var settings = {
                map: map,
                templatePicker: templatePicker,
                layerInfos: layerInfos
            };

            var params = {
                settings: settings
            };

            var editorWidget = new esri.dijit.editing.Editor(params);
            editorWidget.startup();



        }
    });
});