#!/usr/bin/env pwsh
# Nexus Seed Data Script
# Populates database with demo data

Write-Host "🌱 Seeding Nexus Database with Demo Data..." -ForegroundColor Green

# Create Sample Users
$users = @(
    @{name="Narendra Kumar"; email="narendra@nexus.com"; age=28},
    @{name="Sarah Johnson"; email="sarah.johnson@nexus.com"; age=32},
    @{name="Michael Chen"; email="michael.chen@nexus.com"; age=35},
    @{name="Emma Wilson"; email="emma.wilson@nexus.com"; age=27},
    @{name="David Brown"; email="david.brown@nexus.com"; age=40}
)

Write-Host "`n📝 Adding Users..." -ForegroundColor Cyan
foreach($u in $users) {
    $body = $u | ConvertTo-Json
    $response = Invoke-WebRequest -Uri "http://localhost:4000/users" -Method POST -ContentType "application/json" -Body $body -UseBasicParsing
    $user = $response.Content | ConvertFrom-Json
    Write-Host "✓ Added: $($u.name) (ID: $($user.data._id))" -ForegroundColor Green
}

# Create Sample Products
$products = @(
    @{name="Premium Laptop"; description="High-performance laptop with 32GB RAM"; price=1299.99; category="Electronics"; stock=25; isavail=$true},
    @{name="Wireless Mouse"; description="Ergonomic wireless mouse with 2-year battery"; price=49.99; category="Accessories"; stock=100; isavail=$true},
    @{name="USB-C Hub"; description="7-in-1 USB-C hub with multiple ports"; price=89.99; category="Accessories"; stock=50; isavail=$true},
    @{name="4K Monitor"; description="27-inch 4K monitor for professional work"; price=599.99; category="Electronics"; stock=15; isavail=$true},
    @{name="Mechanical Keyboard"; description="RGB mechanical keyboard with custom switches"; price=179.99; category="Accessories"; stock=35; isavail=$true}
)

Write-Host "`n📦 Adding Products..." -ForegroundColor Cyan
foreach($p in $products) {
    $body = $p | ConvertTo-Json
    $response = Invoke-WebRequest -Uri "http://localhost:4000/products" -Method POST -ContentType "application/json" -Body $body -UseBasicParsing
    $product = $response.Content | ConvertFrom-Json
    Write-Host "✓ Added: $($p.name) (ID: $($product.data._id))" -ForegroundColor Green
}

Write-Host "`n✅ Database seeding complete!" -ForegroundColor Green
Write-Host "Your Nexus dashboard now has demo data ready to explore!" -ForegroundColor Yellow
