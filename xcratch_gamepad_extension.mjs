// gamepadExtension.mjs

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
            id: 'gamepad',
            name: 'Gamepad',
            color1: '#0f0',
            color2: '#0a0',
            blocks: [
                {
                    opcode: 'buttonPressed',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: 'button [BTN] pressed on pad [PAD]',
                    arguments: {
                        PAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        BTN: { type: Scratch.ArgumentType.STRING, menu: 'buttons', defaultValue: '0' }
                    }
                },
                {
                    opcode: 'axisValue',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'axis [AXIS] value on pad [PAD]',
                    arguments: {
                        PAD: { type: Scratch.ArgumentType.NUMBER, defaultValue: 1 },
                        AXIS: { type: Scratch.ArgumentType.STRING, menu: 'axes', defaultValue: '0' }
                    }
                }
            ],
            menus: {
                pads:   { items: [1, 2, 3, 4] },
                buttons: { items: Array.from({ length: 16 }, (_, i) => `${i}`) },
                axes:   { items: ['0', '1', '2', '3'] }
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
        // 次のポーリングをスケジュール
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

// Xcratch の Extension Loader が default export を import して登録します
export default GamepadExtension;
