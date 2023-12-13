const cpSet = document.getElementById("cp-set")
const bsAddress = document.getElementById("bs-address")
const RouteAss = document.getElementById("Route-Ass")
const rolePerform = document.getElementById("role-perform")
const profitSetting = document.getElementById("profit-setting")
const storageSettings = document.getElementById("storage-settings")
const submitForm = document.getElementById("submit-form")
cpSet.addEventListener("click", () => {
    document.getElementById("company-details").innerHTML = `
    <div class="company-details hidden">
        <h3>Company Settings</h3>
        <div class="company-info">
            <input type="text" placeholder="Short Code" />
            <input class="company-name" type="text" placeholder="Company Name" />
            <input class="owner-name" type="text" placeholder="Owner Name"/>
            <input class="phone" type="text" placeholder="Phone No." />
            <input class="email" type="text" placeholder="Email" />
            <input class="company-address" type="text" placeholder="Address" />
            <input class="state" type="text" placeholder="State" />
            <input class="city" type="text" placeholder="City" />
            <select class="assigned-station">
                <option value="">Assigned Station</option>
                <option value="" disabled selected>Assigned Station</option>
                <option value="">Lahore</option>
                <option value="">Islamabad</option>
                <option value="">Rawalpindi</option>
            </select>
            <button type="submit">SAVE CHANGES</button>
        </div>
    </div>
`
})
bsAddress.addEventListener("click", () => {
    document.getElementById("company-details").innerHTML = `
    <div class="company-details hidden">
        <h3>Bussiness Address</h3>
        <div class="company-info">
            <input type="text" placeholder="Short Code" />
            <input class="company-name" type="text" placeholder="Company Name" />
            <input class="owner-name" type="text" placeholder="Owner Name" />
            <input class="phone" type="text" placeholder="Phone No." />
            <input class="email" type="text" placeholder="Email" />
            <input class="company-address" type="text" placeholder="Address" />
            <input class="state" type="text" placeholder="State" />
            <input class="city" type="text" placeholder="City" />
            <select class="assigned-station">
                <option value="">Assigned Station</option>
                <option value="">Lahore</option>
                <option value="">Islamabad</option>
                <option value="">Rawalpindi</option>
            </select>
            <button>SAVE CHANGES</button>
        </div>
    </div>
`
})
RouteAss.addEventListener("click", () => {
    document.getElementById("company-details").innerHTML = `
    <div class="company-details hidden">
        <h3>Route Address</h3>
        <div class="company-info">
            <input type="text" placeholder="Short Code" />
            <input class="company-name" type="text" placeholder="Company Name" />
            <input class="owner-name" type="text" placeholder="Owner Name" />
            <input class="phone" type="text" placeholder="Phone No." />
            <input class="email" type="text" placeholder="Email" />
            <input class="company-address" type="text" placeholder="Address" />
            <input class="state" type="text" placeholder="State" />
            <input class="city" type="text" placeholder="City" />
            <button>SAVE CHANGES</button>
        </div>
    </div>
`
})
rolePerform.addEventListener("click", () => {
    document.getElementById("company-details").innerHTML = `
    <div class="company-details hidden">
        <h3>Role Performance</h3>
        <div class="company-info">
            <input type="text" placeholder="Short Code" />
            <input class="company-name" type="text" placeholder="Company Name" />
            <input class="owner-name" type="text" placeholder="Owner Name" />
            <input class="phone" type="text" placeholder="Phone No." />
            <input class="email" type="text" placeholder="Email" />
            <input class="company-address" type="text" placeholder="Address" />
            <input class="state" type="text" placeholder="State" />
            <input class="city" type="text" placeholder="City" />
            <button>SAVE CHANGES</button>
        </div>
    </div>
`
})
profitSetting.addEventListener("click", () => {
    document.getElementById("company-details").innerHTML = `
    <div class="company-details hidden">
        <h3>Profile Settings</h3>
        <div class="company-info">
            <input type="text" placeholder="Short Code" />
            <input class="company-name" type="text" placeholder="Company Name" />
            <input class="owner-name" type="text" placeholder="Owner Name" />
            <input class="phone" type="text" placeholder="Phone No." />
            <input class="email" type="text" placeholder="Email" />
            <input class="company-address" type="text" placeholder="Address" />
            <input class="state" type="text" placeholder="State" />
            <input class="city" type="text" placeholder="City" />
            <button>SAVE CHANGES</button>
        </div>
    </div>
`
})
storageSettings.addEventListener("click", () => {
    document.getElementById("company-details").innerHTML = `
    <div class="company-details hidden">
        <h3>Storage Settings</h3>
        <div class="company-info">
            <input type="text" placeholder="Short Code" />
            <input class="company-name" type="text" placeholder="Company Name" />
            <input class="owner-name" type="text" placeholder="Owner Name" />
            <input class="phone" type="text" placeholder="Phone No." />
            <input class="email" type="text" placeholder="Email" />
            <input class="company-address" type="text" placeholder="Address" />
            <input class="state" type="text" placeholder="State" />
            <input class="city" type="text" placeholder="City" />
            <button>SAVE CHANGES</button>
        </div>
    </div>
`
})