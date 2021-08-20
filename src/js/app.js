import Collapse from './Collapse';
import Widget from './Widget';
import Like from './Like';

const collapse = new Collapse();

collapse.addText();

const widget = new Widget();

widget.closeWidget();
widget.openWidget();
const like = new Like();
like.addImage();
