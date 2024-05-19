function Tourne_Gauche () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
function Tourne_Droite () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
function Reculer () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 1)
}
function Avancer () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        Avancer()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_UP) {
        Stop()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_DOWN) {
        Reculer()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_2_UP) {
        Stop()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_DOWN) {
        Tourne_Droite()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_3_UP) {
        Stop()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_DOWN) {
        Tourne_Gauche()
    }
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_4_UP) {
        Stop()
    }
})
function Stop () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P12, 0)
}
basic.showIcon(IconNames.Happy)
