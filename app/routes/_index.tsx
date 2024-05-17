import { Form, Link } from "@remix-run/react";

export default function Index() {
  const borderStyle = { border: "1px solid black" };

  return (
    <>
      <h2>Test response using external lib</h2>
      <table>
        <tr>
          <th style={borderStyle}>return new Response() in loader/action</th>
          <th style={borderStyle}>Results</th>
        </tr>
        <tr>
          <td>
            <Link to="/response-object" reloadDocument>
              loader
            </Link>
          </td>
          <td>✅ if land on the page directly</td>
        </tr>
        <tr>
          <td>
            <Link to="/response-object">loader</Link>
          </td>
          <td>
            ❌ if link to it. TypeError: headers.getSetCookie is not a function
            or its return value is not iterable
          </td>
        </tr>
        <tr>
          <td>
            <Form action="/response-object" method="post">
              <button type="submit">action</button>
            </Form>
          </td>
          <td>
            ❌ TypeError: headers.getSetCookie is not a function or its return
            value is not iterable
          </td>
        </tr>
        <tr>
          <th style={borderStyle}>
            return new Response() from a lib in loader/action
          </th>
          <th style={borderStyle}>Results</th>
        </tr>
        <tr>
          <td>
            <Link to="/response-object-from-lib" reloadDocument>
              loader
            </Link>
          </td>
          <td>✅ if land on the page directly</td>
        </tr>
        <tr>
          <td>
            <Link to="/response-object-from-lib">loader</Link>
          </td>
          <td>
            ❌ if link to it. TypeError: headers.getSetCookie is not a function
            or its return value is not iterable
          </td>
        </tr>
        <tr>
          <td>
            <Form action="/response-object-from-lib" method="post">
              <button type="submit">action</button>
            </Form>
          </td>
          <td>
            ❌ TypeError: headers.getSetCookie is not a function or its return
            value is not iterable
          </td>
        </tr>
        <tr>
          <th style={borderStyle}>use response stub with loader/action</th>
          <th style={borderStyle}>Results</th>
        </tr>
        <tr>
          <td>
            <td>
              <Link to="/response-stub">loader</Link>
            </td>
          </td>
          <td>✅</td>
        </tr>
        <tr>
          <td>
            <Form action="/response-stub" method="post">
              <button type="submit">action</button>
            </Form>
          </td>
          <td>✅</td>
        </tr>
        <tr>
          <th style={borderStyle}>
            use response stub with defineLoader/defineAction
          </th>
          <th style={borderStyle}>Results</th>
        </tr>
        <tr>
          <td>
            <td>
              <Link to="/response-stub-define">loader</Link>
            </td>
          </td>
          <td>✅</td>
        </tr>
        <tr>
          <td>
            <Form action="/response-stub-define" method="post">
              <button type="submit">action</button>
            </Form>
          </td>
          <td>✅</td>
        </tr>
      </table>
    </>
  );
}
