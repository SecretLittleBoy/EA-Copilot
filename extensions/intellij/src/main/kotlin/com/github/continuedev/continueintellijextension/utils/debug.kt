package com.github.continuedev.continueintellijextension.utils

val isDebug = true

fun debugPrintln(message: String) {
    if (isDebug) {
        println(message)
    }
}

fun debugWebviewPrintln(message: String) {
    if(isDebug&&!message.contains("getOpenFiles")) {
        println(message)
    }
}