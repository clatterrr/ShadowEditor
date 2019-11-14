import './css/DisplayPanel.css';
import { classNames, PropTypes, Window, Content, TabLayout, Buttons, Button, Form, FormControl, Label, Input, Select, CheckBox } from '../../../third_party';

/**
 * 显示选项窗口
 * @author tengge / https://github.com/tengge1
 */
class DisplayPanel extends React.Component {
    constructor(props) {
        super(props);

        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        const { selectedColor, selectedThickness } = app.options;

        return <Form className={'DisplayPanel'}>
            <FormControl>
                <Label>{_t('Selected Color')}</Label>
                <Input className={'selected-color'}
                    name={'selectedColor'}
                    type={'color'}
                    value={selectedColor}
                    onChange={this.handleChange}
                />
            </FormControl>
            <FormControl>
                <Label>{_t('Border Thickness')}</Label>
                <Input className={'selected-thickness'}
                    name={'selectedThickness'}
                    type={'number'}
                    min={1}
                    max={100}
                    precision={1}
                    value={selectedThickness}
                    onChange={this.handleChange}
                />
            </FormControl>
        </Form>;
    }

    handleUpdate() {
        this.forceUpdate();
    }

    handleChange(value, name) {
        if (value === null) {
            this.setState({
                [name]: value,
            });
            return;
        }

        app.options[name] = value;
        app.call(`optionChange`, this, name, value);

        this.handleUpdate();
    }
}

export default DisplayPanel;