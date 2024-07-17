package com.github.continuedev.continueintellijextension.constants

import java.nio.file.Files
import java.nio.file.Paths

fun getContinueGlobalPath(): String {
    val continuePath = Paths.get(System.getProperty("user.home"), ".continue")
    if (Files.notExists(continuePath)) {
        Files.createDirectories(continuePath)
    }
    return continuePath.toString()
}

fun getConfigJsonPath(): String {
    val path = Paths.get(getContinueGlobalPath(), "config.json")
    if (Files.notExists(path)) {
        Files.createFile(path)
        println("ServerConstants.kt getConfigJsonPath(): config.json does not exist")
    }
    return path.toString()
}

fun getConfigJsPath(): String {
    val path = Paths.get(getContinueGlobalPath(), "config.js")
    if (Files.notExists(path)) {
        Files.createFile(path)
        println("ServerConstants.kt getConfigJsPath(): config.js does not exist")
    }
    return path.toString()
}

fun getSessionsDir(): String {
    val path = Paths.get(getContinueGlobalPath(), "sessions")
    if (Files.notExists(path)) {
        Files.createDirectories(path)
    }
    return path.toString()
}

fun getSessionsListPath(): String {
    val path = Paths.get(getSessionsDir(),  "sessions.json")
    if (Files.notExists(path)) {
        Files.createFile(path)
        println("ServerConstants.kt getSessionsListPath(): sessions.json does not exist, creating it")
        Files.writeString(path, "[]")
    }
    return path.toString()
}

fun getSessionFilePath(sessionId: String): String {
    val path = Paths.get(getSessionsDir(),  "$sessionId.json")
    if (Files.notExists(path)) {
        Files.createFile(path)
        println("ServerConstants.kt getSessionFilePath(): $sessionId.json does not exist, creating it")
        Files.writeString(path, "{}")
    }
    return path.toString()
}
