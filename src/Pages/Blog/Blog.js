import { Accordion } from "flowbite-react";
import React from "react";
import {Helmet} from "react-helmet";
const Blog = () => {
  console.log("Blog page");

  return (
    <>
    <Helmet>
            <title>{`Babri's Photography - Blog`}</title>
            </Helmet>
    <Accordion className="my-20">
      <Accordion.Panel>
        <Accordion.Title>Difference between SQL and NoSQL.</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The five critical differences between SQL vs NoSQL are: SQL
            databases are relational, NoSQL databases are non-relational. SQL
            databases use structured query language and have a predefined
            schema. NoSQL databases have dynamic schemas for unstructured data.
            SQL databases are vertically scalable, while NoSQL databases are
            horizontally scalable. SQL databases are table-based, while NoSQL
            databases are document, key-value, graph, or wide-column stores. SQL
            databases are better for multi-row transactions, while NoSQL is
            better for unstructured data like documents or JSON.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>What is JWT, and how does it work?</Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            JWT, or JSON Web Token, is an open standard used to share security
            information between two parties — a client and a server. Each JWT
            contains encoded JSON objects, including a set of claims. JWTs are
            signed using a cryptographic algorithm to ensure that the claims
            cannot be altered after the token is issued. JWTs differ from other
            web tokens in that they contain a set of claims. Claims are used to
            transmit information between two parties. What these claims are
            depends on the use case at hand. For example, a claim may assert who
            issued the token, how long it is valid for, or what permissions the
            client has been granted. A JWT is a string made up of three parts,
            separated by dots (.), and serialized using base64. In the most
            common serialization format, compact serialization, the JWT looks
            something like this: xxxxx.yyyyy.zzzzz. Once decoded, you will get
            two JSON strings: The header and the payload. The signature. The
            JOSE (JSON Object Signing and Encryption) header contains the type
            of token — JWT in this case — and the signing algorithm. The payload
            contains the claims. This is displayed as a JSON string, usually
            containing no more than a dozen fields to keep the JWT compact. This
            information is typically used by the server to verify that the user
            has permission to perform the action they are requesting. There are
            no mandatory claims for a JWT, but overlaying standards may make
            claims mandatory. For example, when using JWT as bearer access token
            under OAuth2.0, iss, sub, aud, and exp must be present. some are
            more common than others. The signature ensures that the token hasn’t
            been altered. The party that creates the JWT signs the header and
            payload with a secret that is known to both the issuer and receiver,
            or with a private key known only to the sender. When the token is
            used, the receiving party verifies that the header and payload match
            the signature.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          What is the difference between javascript and NodeJS?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Javascript is a prototype-based, single-threaded programming
            language (I’m simplifying it a lot, there’s so much more to
            Javascript, however for the sake of this TLDR, know it’s a
            programming language). Javascript runtime is an environment where
            Javascript source code executes within. Javascript engines fuel
            Javascript runtime environments, these engines are also now known as
            ECMAScript engines. JS Engines are responsible for parsing and
            executing source code. Since client-side Javascript requires
            downloading source code and running it on the browser, all major
            browser vendors such as Chrome, Mozilla, Safari, and even IE/Edge
            have a runtime environment with an engine. You may have heard of
            Chrome’s V8 Engine, or Mozilla’s SpiderMonkey Engine. NodeJS is an
            open-source, runtime environment, which uses Chrome’s V8 Engine, and
            executes Javascript code outside of a web browser. NodeJS provides
            the ability to develop server-side Javascript programs. Developers
            can interact with files hosted on the server, interact with
            databases, collect form data, and more. Although NodeJS provides
            multiple tools to developers disposal, there are various types of
            frameworks, which utilize Node that help minimize the workload for
            different kinds of Javascript development. Web frameworks such as
            Express, Hapi, and Koa, reduce the workload for developing web
            applications. There’s also a difference between a browsers runtime
            environment vs. NodeJS. One significant difference is the DOM
            (Document Object Model). The DOM is a Web API provided by the
            browser’s runtime environment. However, NodeJS is entirely
            independent of web browsers. Therefore it neither needs nor has a
            DOM. To summarize, Javascript is a programming language, and NodeJS
            is a runtime environment to execute Javascript source code.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title>
          How does NodeJS handle multiple requests at the same time?
        </Accordion.Title>
        <Accordion.Content>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Given a NodeJS application, since Node is single threaded, say if
            processing involves a Promise.all that takes 8 seconds, does this
            mean that the client request that comes after this request would
            need to wait for eight seconds? No. NodeJS event loop is single
            threaded. The entire server architecture for NodeJS is not single
            threaded. Before getting into the Node server architecture, to take
            a look at typical multithreaded request response model, the web
            server would have multiple threads and when concurrent requests get
            to the webserver, the webserver picks threadOne from the threadPool
            and threadOne processes requestOne and responds to clientOne and
            when the second request comes in, the web server picks up the second
            thread from the threadPool and picks up requestTwo and processes it
            and responds to clientTwo. threadOne is responsible for all kinds of
            operations that requestOne demanded including doing any blocking IO
            operations. The fact that the thread needs to wait for blocking IO
            operations is what makes it inefficient. With this kind of a model,
            the webserver is only able to serve as much requests as there are
            threads in the thread pool. NodeJS Web Server maintains a limited
            Thread Pool to provide services to client requests. Multiple clients
            make multiple requests to the NodeJS server. NodeJS receives these
            requests and places them into the EventQueue . NodeJS server has an
            internal component referred to as the EventLoop which is an infinite
            loop that receives requests and processes them. This EventLoop is
            single threaded. In other words, EventLoop is the listener for the
            EventQueue. So, we have an event queue where the requests are being
            placed and we have an event loop listening to these requests in the
            event queue. What happens next? The listener(the event loop)
            processes the request and if it is able to process the request
            without needing any blocking IO operations, then the event loop
            would itself process the request and sends the response back to the
            client by itself. If the current request uses blocking IO
            operations, the event loop sees whether there are threads available
            in the thread pool, picks up one thread from the thread pool and
            assigns the particular request to the picked thread. That thread
            does the blocking IO operations and sends the response back to the
            event loop and once the response gets to the event loop, the event
            loop sends the response back to the client. How is NodeJS better
            than traditional multithreaded request response model? With
            traditional multithreaded request/response model, every client gets
            a different thread where as with NodeJS, the simpler request are all
            handled directly by the EventLoop. This is an optimization of thread
            pool resources and there is no overhead of creating the threads for
            every client request.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    </>
  );
};

export default Blog;
