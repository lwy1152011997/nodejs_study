IncomingMessage
{
_readableState: ReadableState {
objectMode: false,
highWaterMark: 16384,
buffer: BufferList {
head: null, tail: null, length: 0
},
length: 0,
pipes: [],
flowing: null,
ended: false,
endEmitted: false,
reading: false,
constructed: true,
sync: true,
needReadable: false,
emittedReadable: false,
readableListening: false,
resumeScheduled: false,
errorEmitted: false,
emitClose: true,
autoDestroy: true,
destroyed: false,
errored: null,
closed: false,
closeEmitted: false,
defaultEncoding: 'utf8',
awaitDrainWriters: null,
multiAwaitDrain: false,
readingMore: true,
dataEmitted: false,
decoder: null,
encoding: null,
[Symbol(kPaused)
]: null
},
_events: [Object: null prototype
] {
end: [Function: clearRequestTimeout
]
},
_eventsCount: 1,
_maxListeners: undefined,
socket: <ref * 1 > Socket {
connecting: false,
_hadError: false,
_parent: null,
_host: null,
_readableState: ReadableState {
objectMode: false,
highWaterMark: 16384,
buffer: BufferList {
head: null, tail: null, length: 0
},
length: 0,
pipes: [],
flowing: true,
ended: false,
endEmitted: false,
reading: true,
constructed: true,
sync: false,
needReadable: true,
emittedReadable: false,
readableListening: false,
resumeScheduled: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
destroyed: false,
errored: null,
closed: false,
closeEmitted: false,
defaultEncoding: 'utf8',
awaitDrainWriters: null,
multiAwaitDrain: false,
readingMore: false,
dataEmitted: false,
decoder: null,
encoding: null,
[Symbol(kPaused)
]: false
},
_events: [Object: null prototype
] {
end: [Array
],
timeout: [Function: socketOnTimeout
],
data: [Function: bound socketOnData
],
error: [Function: socketOnError
],
close: [Array
],
drain: [Function: bound socketOnDrain
],
resume: [Function: onSocketResume
],
pause: [Function: onSocketPause
]
},
_eventsCount: 8,
_maxListeners: undefined,
_writableState: WritableState {
objectMode: false,
highWaterMark: 16384,
finalCalled: false,
needDrain: false,
ending: false,
ended: false,
finished: false,
destroyed: false,
decodeStrings: false,
defaultEncoding: 'utf8',
length: 0,
writing: false,
corked: 0,
sync: true,
bufferProcessing: false,
onwrite: [Function: bound onwrite
],
writecb: null,
writelen: 0,
afterWriteTickInfo: null,
buffered: [],
bufferedIndex: 0,
allBuffers: true,
allNoop: true,
pendingcb: 0,
constructed: true,
prefinished: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
errored: null,
closed: false,
closeEmitted: false,
[Symbol(kOnFinished)
]: []
},
allowHalfOpen: true,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
_events: [Object: null prototype
],
_eventsCount: 2,
_maxListeners: undefined,
_connections: 2,
_handle: [TCP
],
_usingWorkers: false,
_workers: [],
_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: false,
keepAlive: false,
keepAliveInitialDelay: 0,
httpAllowHalfOpen: false,
timeout: 0,
keepAliveTimeout: 5000,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
headersTimeout: 60000,
requestTimeout: 0,
_connectionKey: '6: : : : 8080',
[Symbol(IncomingMessage)
]: [Function: IncomingMessage
],
[Symbol(ServerResponse)
]: [Function: ServerResponse
],
[Symbol(kCapture)
]: false,
[Symbol(async_id_symbol)
]: 2
},
_server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
_events: [Object: null prototype
],
_eventsCount: 2,
_maxListeners: undefined,
_connections: 2,
_handle: [TCP
],
_usingWorkers: false,
_workers: [],
_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: false,
keepAlive: false,
keepAliveInitialDelay: 0,
httpAllowHalfOpen: false,
timeout: 0,
keepAliveTimeout: 5000,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
headersTimeout: 60000,
requestTimeout: 0,
_connectionKey: '6: : : : 8080',
[Symbol(IncomingMessage)
]: [Function: IncomingMessage
],
[Symbol(ServerResponse)
]: [Function: ServerResponse
],
[Symbol(kCapture)
]: false,
[Symbol(async_id_symbol)
]: 2
},
parser: HTTPParser {
'0': [Function: bound setRequestTimeout
],
'1': [Function: parserOnHeaders
],
'2': [Function: parserOnHeadersComplete
],
'3': [Function: parserOnBody
],
'4': [Function: parserOnMessageComplete
],
'5': [Function: bound onParserExecute
],
'6': [Function: bound onParserTimeout
],
_headers: [],
_url: '',
socket: [Circular * 1
],
incoming: [Circular * 2
],
outgoing: null,
maxHeaderPairs: 2000,
_consumed: true,
onIncoming: [Function: bound parserOnIncoming
],
[Symbol(resource_symbol)
]: [HTTPServerAsyncResource
]
},
on: [Function: socketListenerWrap
],
addListener: [Function: socketListenerWrap
],
prependListener: [Function: socketListenerWrap
],
setEncoding: [Function: socketSetEncoding
],
_paused: false,
_httpMessage: ServerResponse {
_events: [Object: null prototype
],
_eventsCount: 1,
_maxListeners: undefined,
outputData: [],
outputSize: 0,
writable: true,
destroyed: false,
_last: false,
chunkedEncoding: false,
shouldKeepAlive: true,
maxRequestsOnConnectionReached: false,
_defaultKeepAlive: true,
useChunkedEncodingByDefault: true,
sendDate: true,
_removedConnection: false,
_removedContLen: false,
_removedTE: false,
_contentLength: null,
_hasBody: true,
_trailer: '',
finished: false,
_headerSent: false,
_closed: false,
socket: [Circular * 1
],
_header: null,
_keepAliveTimeout: 5000,
_onPendingData: [Function: bound updateOutgoingData
],
req: [Circular * 2
],
_sent100: false,
_expect_continue: false,
[Symbol(kCapture)
]: false,
[Symbol(kNeedDrain)
]: false,
[Symbol(corked)
]: 0,
[Symbol(kOutHeaders)
]: null
},
[Symbol(async_id_symbol)
]: 7,
[Symbol(kHandle)
]: TCP {
reading: true,
onconnection: null,
_consumed: true,
[Symbol(owner_symbol)
]: [Circular * 1
]
},
[Symbol(lastWriteQueueSize)
]: 0,
[Symbol(timeout)
]: null,
[Symbol(kBuffer)
]: null,
[Symbol(kBufferCb)
]: null,
[Symbol(kBufferGen)
]: null,
[Symbol(kCapture)
]: false,
[Symbol(kSetNoDelay)
]: false,
[Symbol(kSetKeepAlive)
]: false,
[Symbol(kSetKeepAliveInitialDelay)
]: 0,
[Symbol(kBytesRead)
]: 0,
[Symbol(kBytesWritten)
]: 0,
[Symbol(RequestTimeout)
]: undefined
},
httpVersionMajor: 1,
httpVersionMinor: 1,
httpVersion: '1.1',
complete: false,
rawHeaders: [
'Host',
'127.0.0.1: 8080',
'Connection',
'keep-alive',
'sec-ch-ua',
'" Not A;Brand";v="99",
"Chromium"; v = "102",
"Google Chrome"; v = "102"',
'sec-ch-ua-mobile',
'?0',
'sec-ch-ua-platform',
'"Windows"',
'Upgrade-Insecure-Requests',
'1',
'User-Agent',
'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.63 Safari/537.36',
'Accept',
'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
'Sec-Fetch-Site',
'none',
'Sec-Fetch-Mode',
'navigate',
'Sec-Fetch-User',
'?1',
'Sec-Fetch-Dest',
'document',
'Accept-Encoding',
'gzip, deflate, br',
'Accept-Language',
'zh-CN,zh;q=0.9'
],
rawTrailers: [],
aborted: false,
upgrade: false,
url: '/',
method: 'GET',
statusCode: null,
statusMessage: null,
client: <ref * 1 > Socket {
connecting: false,
_hadError: false,
_parent: null,
_host: null,
_readableState: ReadableState {
objectMode: false,
highWaterMark: 16384,
buffer: BufferList { head: null, tail: null, length: 0 },
length: 0,
pipes: [],
flowing: true,
ended: false,
endEmitted: false,
reading: true,
constructed: true,
sync: false,
needReadable: true,
emittedReadable: false,
readableListening: false,
resumeScheduled: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
destroyed: false,
errored: null,
closed: false,
closeEmitted: false,
defaultEncoding: 'utf8',
awaitDrainWriters: null,
multiAwaitDrain: false,
readingMore: false,
dataEmitted: false,
decoder: null,
encoding: null,
[Symbol(kPaused)]: false
},
_events: [Object: null prototype] {
end: [Array],
timeout: [Function: socketOnTimeout],
data: [Function: bound socketOnData],
error: [Function: socketOnError],
close: [Array],
drain: [Function: bound socketOnDrain],
resume: [Function: onSocketResume],
pause: [Function: onSocketPause]
},
_eventsCount: 8,
_maxListeners: undefined,
_writableState: WritableState {
objectMode: false,
highWaterMark: 16384,
finalCalled: false,
needDrain: false,
ending: false,
ended: false,
finished: false,
destroyed: false,
decodeStrings: false,
defaultEncoding: 'utf8',
length: 0,
writing: false,
corked: 0,
sync: true,
bufferProcessing: false,
onwrite: [Function: bound onwrite],
writecb: null,
writelen: 0,
afterWriteTickInfo: null,
buffered: [],
bufferedIndex: 0,
allBuffers: true,
allNoop: true,
pendingcb: 0,
constructed: true,
prefinished: false,
errorEmitted: false,
emitClose: false,
autoDestroy: true,
errored: null,
closed: false,
closeEmitted: false,
[Symbol(kOnFinished)]: []
},
allowHalfOpen: true,
_sockname: null,
_pendingData: null,
_pendingEncoding: '',
server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
_events: [Object: null prototype],
_eventsCount: 2,
_maxListeners: undefined,
_connections: 2,
_handle: [TCP],
_usingWorkers: false,
_workers: [],
_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: false,
keepAlive: false,
keepAliveInitialDelay: 0,
httpAllowHalfOpen: false,
timeout: 0,
keepAliveTimeout: 5000,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
headersTimeout: 60000,
requestTimeout: 0,
_connectionKey: '6::::8080',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 2
},
_server: Server {
maxHeaderSize: undefined,
insecureHTTPParser: undefined,
_events: [Object: null prototype],
_eventsCount: 2,
_maxListeners: undefined,
_connections: 2,
_handle: [TCP],
_usingWorkers: false,
_workers: [],
_unref: false,
allowHalfOpen: true,
pauseOnConnect: false,
noDelay: false,
keepAlive: false,
keepAliveInitialDelay: 0,
httpAllowHalfOpen: false,
timeout: 0,
keepAliveTimeout: 5000,
maxHeadersCount: null,
maxRequestsPerSocket: 0,
headersTimeout: 60000,
requestTimeout: 0,
_connectionKey: '6::::8080',
[Symbol(IncomingMessage)]: [Function: IncomingMessage],
[Symbol(ServerResponse)]: [Function: ServerResponse],
[Symbol(kCapture)]: false,
[Symbol(async_id_symbol)]: 2
},
parser: HTTPParser {
'0': [Function: bound setRequestTimeout],
'1': [Function: parserOnHeaders],
'2': [Function: parserOnHeadersComplete],
'3': [Function: parserOnBody],
'4': [Function: parserOnMessageComplete],
'5': [Function: bound onParserExecute],
'6': [Function: bound onParserTimeout],
_headers: [],
_url: '',
socket: [Circular * 1],
incoming: [Circular * 2],
outgoing: null,
maxHeaderPairs: 2000,
_consumed: true,
onIncoming: [Function: bound parserOnIncoming],
[Symbol(resource_symbol)]: [HTTPServerAsyncResource]
},
on: [Function: socketListenerWrap],
addListener: [Function: socketListenerWrap],
prependListener: [Function: socketListenerWrap],
setEncoding: [Function: socketSetEncoding],
_paused: false,
_httpMessage: ServerResponse {
_events: [Object: null prototype],
_eventsCount: 1,
_maxListeners: undefined,
outputData: [],
outputSize: 0,
writable: true,
destroyed: false,
_last: false,
chunkedEncoding: false,
shouldKeepAlive: true,
maxRequestsOnConnectionReached: false,
_defaultKeepAlive: true,
useChunkedEncodingByDefault: true,
sendDate: true,
_removedConnection: false,
_removedContLen: false,
_removedTE: false,
_contentLength: null,
_hasBody: true,
_trailer: '',
finished: false,
_headerSent: false,
_closed: false,
socket: [Circular * 1],
_header: null,
_keepAliveTimeout: 5000,
_onPendingData: [Function: bound updateOutgoingData],
req: [Circular * 2],
_sent100: false,
_expect_continue: false,
[Symbol(kCapture)]: false,
[Symbol(kNeedDrain)]: false,
[Symbol(corked)]: 0,
[Symbol(kOutHeaders)]: null
},
[Symbol(async_id_symbol)]: 7,
[Symbol(kHandle)]: TCP {
'sec-fetch-user': '?1',
'sec-fetch-dest': 'document',
'accept-encoding': 'gzip, deflate, br',
'accept-language': 'zh-CN,zh;q=0.9'
},
[Symbol(kHeadersCount)]: 28,
[Symbol(kTrailers)]: null,
[Symbol(kTrailersCount)]: 0,
[Symbol(RequestTimeout)]: undefined
}