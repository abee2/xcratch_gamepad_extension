// gamepadExtension.mjs

// Xcratch Extension entry metadata
const EXTENSION_ID = 'gamepad';
// Will be replaced to the URL used to import this module
let extensionURL = '';

/**
 * Entry object for Xcratch Extension Loader
 */
const entry = {
    extensionId: EXTENSION_ID,
    extensionURL: extensionURL,
    collaborator: 'your-github-username',  // Change to your GitHub ID or organization
    // Optional: can set iconURL, description, tags, etc.
};

/**
 * GamepadExtension provides blocks for button and axis input
 */
class GamepadExtension {
    constructor(runtime) {
        this.runtime = runtime;
        this.gamepads = [];
        this._onGamepadConnected = this._onGamepadConnected.bind(this);
        this._onGamepadDisconnected = this._onGamepadDisconnected.bind(this);
        window.addEventListener('gamepadconnected', this._onGamepadConnected);
        window.addEventListener('gamepaddisconnected', this._onGamepadDisconnected);
        this._pollGamepads();
    }

    getInfo() {
        return {
            id: EXTENSION_ID,
            name: 'Gamepad',
            extensionURL: extensionURL,
            blockIconURI: '',  // optional: data URI or URL to icon
            showStatusButton: false,
            blocks: [
                {
                    opcode: 'buttonPressed',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'button [BTN] pressed on pad [PAD]',
                    arguments: {
                        PAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1, menu: 'pads' },
                        BTN: { type: Scratch.ArgumentType.STRING, menu: 'buttons', defaultValue: '0' }
                    }
                },
                {
                    opcode: 'axisValue',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'axis [AXIS] value on pad [PAD]',
                    arguments: {
                        PAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1, menu: 'pads' },
                        AXIS: { type: Scratch.ArgumentType.STRING, menu: 'axes', defaultValue: '0' }
                    }
                }
            ],
            menus: {
                pads:    { items: [1, 2, 3, 4] },
                buttons: { items: Array.from({ length: 16 }, (_, i) => `${i}`) },
                axes:    { items: ['0', '1', '2', '3'] }
            }
        };
    }

    _onGamepadConnected(e) {
        console.log(
            `Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}. ` +
            `${e.gamepad.buttons.length} buttons, ${e.gamepad.axes.length} axes.`
        );
    }

    _onGamepadDisconnected(e) {
        console.log(
            `Gamepad disconnected from index ${e.gamepad.index}: ${e.gamepad.id}`
        );
    }

    _pollGamepads() {
        this.gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
        setTimeout(() => this._pollGamepads(), 100);
    }

    buttonPressed({ PAD, BTN }) {
        const pad = this.gamepads[PAD - 1];
        return !!(pad && pad.buttons[Number(BTN)] && pad.buttons[Number(BTN)].pressed);
    }

    axisValue({ PAD, AXIS }) {
        const pad = this.gamepads[PAD - 1];
        return pad && pad.axes[Number(AXIS)] != null ? pad.axes[Number(AXIS)] : 0;
    }
}

// Export as named exports for Xcratch
export { GamepadExtension as blockClass, entry };
