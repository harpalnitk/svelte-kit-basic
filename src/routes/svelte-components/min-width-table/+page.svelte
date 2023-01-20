<!-- table-layout:  
 the browser does its best with 
 the algorithm it has to divide 
 the full available width between
  each column.

  table-layout: fixed, then the browser will merely
   divide the full available space by the total number
    of columns, then apply that value as the width 
    for each column -->

    <!-- But what if we want to control the widths of 
    our columns? We have the <colgroup> element to help
        <table>
            <colgroup>
              <col />
              <col style="width: 400px;" />
              <col style="width: 320px;" />
              <col style="width: 450px;" />
            </colgroup>
            
            <thead>
              <tr>
                <th>Project name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Edit</th>
              </tr>
            </thead> -->

            <table>
                <colgroup>
                  <col class="col-200" />
                  <col />
                  <col class="col-input" />
                  <col class="col-date" />
                  <col class="col-edit" />
                </colgroup>
                
                <thead>
                  <tr>
                    <th colspan="2">Project name</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td colspan="2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint accusamus amet doloremque labore quibusdam vero optio similique, voluptate obcaecati adipisci, quod ab ducimus quas quia, harum ad eius impedit aliquid?</td>
                    <td>
                      <label for="amount-input">Amount</label>
                      <input id="amount-input" type="text" />  
                    </td>
                    <td>24-12-2021</td>
                    <td><button>Edit</button></td>
                  </tr>
                </tbody>
              </table>
              <!-- The solution is to fake a min-width and we need 
              to be a bit creative to do it.

              We can add an empty <col> as the second column 
              for our <colgroup> in the HTML and apply a 
                colspan attribute on the first column so 
                that the first column takes up the space 
                for both columns -->

                <!-- The trick is that relationship between the first 
                <col> and the empty second <col>. If we apply a
                 width to the first <col> (it’s 200px in
                  the snippet above), then the second
                   column will be eaten up when the
                    fixed table layout divides up the
                     available space to distribute to
                      the columns. But the width of 
                      the first column (200px) is respected 
                      and remains in place. -->
<!-- 
Voilà! We have a faux min-width set on a table cell. 
The first cell flexes as the available space changes
 and the table overflows for horizontal scrolling
  just as we hoped it would. -->
              <style lang='scss'>
                table {
  width: 100%;
  table-layout: fixed;
  border-spacing: 0;
  border-top: 1px solid #999;
  border-left: 1px solid #999;
}

th,
td {
  padding: 5px;
  vertical-align: top;
  border-bottom: 1px solid #999;
  border-right: 1px solid #999;
  
  &:first-child {
    position: sticky;
    left: 0;
    z-index: 1;
  }
}

th {
  background-color: #efefef;
  font-weight: 500;
  text-align: left;
}

td {
  background-color: #fff;
}

label {
  clip: rect(0 0 0 0); 
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap; 
  width: 1px;
}

input {
  width: 100%;
  padding: 5px;
  font-family: inherit;
  font-size: 1rem;
}

.col-200 {
  width: 200px;
}

.col-input {
  width: 220px;
}

.col-date {
  width: 260px;
}

.col-edit {
  width: 160px;
}
              </style>